import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";

import { LoadingSpinner } from "./LoadingSpinner";
import { Tweet } from "./Tweet";

export const FeedView = ({ feed }) => {
  const { status } = useSelector((state) => state.feeds);

  if (status === "loading") {
    return <LoadingSpinner />;
  }
  return (
    <Wrapper>
      {feed.map((tweet) => {
        return <Tweet key={tweet.id} tweet={tweet} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
`;