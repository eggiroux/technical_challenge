import React from "react";
import styled from "styled-components";

import GlobalStyles from "./Components/GlobalStyles";

import { FeedSwitcher } from "./Components/FeedSwitcher";
import { FeedView } from "./Views/FeedView";

export const App = () => {
  return (
    <Wrapper>
      <GlobalStyles />
      <FeedSwitcher />
      <FeedView />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  max-width: 400px;
  overflow: scroll;
  margin: auto;
  padding: 0px 16px;
  background-color: lightgrey;
  border-radius: 6px;
  border: 1px solid black;
`;
