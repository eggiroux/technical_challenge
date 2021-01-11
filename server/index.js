const express = require("express");
const fetch = require("isomorphic-fetch");
require("dotenv").config();

const token = process.env.BEARER_TOKEN;

const app = new express();
const port = process.env.PORT || 5678;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/tweets/:query", async (req, res, next) => {
  const { query } = req.params;

  const formattedQuery = query.replace(" ", "%20");

  const response = await fetch(
    `https://api.twitter.com/2/tweets/search/recent?query=${formattedQuery}&tweet.fields=created_at&expansions=author_id&user.fields=created_at

`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();
  if (!data.data) {
    return res.status(404).send({ error: true, message: "No tweets found." });
  }

  const tweets = data.data.map((tweet) => {
    const user = data.includes.users.find(
      (userObject) => userObject.id === tweet.author_id
    );

    if (!user.name) {
      return null;
    }
    tweet.user = user;
    return tweet;
  });

  res.status(200).send(tweets);
});

app.listen(port, function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎  Listening on port ${port}.`);
  }
});
