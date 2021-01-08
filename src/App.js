import React from "react";
import styled from "styled-components";

import GlobalStyles from "./components/GlobalStyles";

import { FeedSwitcher } from "./components/FeedSwitcher";

export const App = () => {
  return (
    <Wrapper>
      <GlobalStyles />
      <FeedSwitcher />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  max-width: 400px;
  margin: auto;
  padding: 0px 16px;
  background-color: grey;
  border-radius: 6px;
`;
