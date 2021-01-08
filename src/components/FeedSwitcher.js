import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { requestFeedData, feedDataLoading } from "../actions";

import { FeedView } from "./FeedView";

export const FeedSwitcher = () => {
  const dispatch = useDispatch();
  const [activeFeed, setActiveFeed] = React.useState(1);
  const [requestUrl, setRequestUrl] = React.useState("1");

  const [topic1, setTopic1] = React.useState("donald trump");
  const [topic2, setTopic2] = React.useState("hillary clinton");

  React.useEffect(() => {
    if (activeFeed === 1) {
      setRequestUrl(`/tweets/${topic1}`);
    } else {
      setRequestUrl(`/tweets/${topic2}`);
    }
  }, [activeFeed]);

  React.useEffect(() => {
    dispatch(requestFeedData(requestUrl));
  }, [requestUrl]);

  const { feed } = useSelector((state) => state.feeds);

  return (
    <Wrapper>
      <Switch
        onClick={() => {
          setActiveFeed(1);
        }}
        disabled={activeFeed === 1}
      >
        switch feed
      </Switch>
      <Switch
        onClick={() => {
          setActiveFeed(2);
        }}
        disabled={activeFeed === 2}
      >
        switch feed
      </Switch>
      <FeedView feed={feed} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 16px;
  max-height: 100%;
  overflow: scroll;
`;

const Switch = styled.button``;
