import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";

import { LoadingSpinner } from "../../components/LoadingSpinner";
import { Tweet } from "./Tweet";

export const FeedView = () => {
  const { status, feed, error } = useSelector((state) => state.feeds);

  if (status === "loading") {
    return <LoadingSpinner />;
  }
  if (status === "error") {
    return <Wrapper>{error}</Wrapper>;
  }

  return (
    <Wrapper>
      {feed.map((tweet) => {
        return (
          <Tweet
            key={tweet.id}
            tweet={tweet}
            name={tweet.user.name}
            handle={tweet.user.username}
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
