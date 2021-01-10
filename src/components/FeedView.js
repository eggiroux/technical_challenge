import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";

import { LoadingSpinner } from "./LoadingSpinner";
import { Tweet } from "./Tweet";

export const FeedView = () => {
  const { status, feed, users } = useSelector((state) => state.feeds);

  if (status === "loading") {
    return <LoadingSpinner />;
  }
  return (
    <Wrapper>
      {feed.map((tweet, index) => {
        const user = users[index];
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
