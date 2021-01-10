const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("isomorphic-fetch");
require("dotenv").config();

const token = process.env.BEARER_TOKEN;

const app = new express();
const port = 5678;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
  res.status(200).send(data);
});

app.listen(port, function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎  Listening on port ${port}.`);
  }
});
