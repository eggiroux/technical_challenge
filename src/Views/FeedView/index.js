import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";

import { LoadingSpinner } from "../../Components/LoadingSpinner";
import { Tweet } from "./Tweet";

export const FeedView = () => {
  const { status, feed, users, error } = useSelector((state) => state.feeds);

  if (status === "loading") {
    return <LoadingSpinner />;
  }

  if (status === "error") {
    return <Wrapper>{error}</Wrapper>;
  }

  return (
    <Wrapper>
      {feed.map((tweet) => {
        const user = users.find(
          (userArray) => userArray.id === tweet.author_id
        );

        if (!user.name) {
          return null;
        }

        return (
          <Tweet
            key={tweet.id}
            tweet={tweet}
            name={user.name}
            handle={user.username}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 12px;
  height: 100%;
`;
