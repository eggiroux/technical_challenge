import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { requestFeedData } from "./actions";

export const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(requestFeedData("http://api.open-notify.org/iss-now.json"));
  }, [dispatch]);
  return <Wrapper>This is my app component</Wrapper>;
};

const Wrapper = styled.div``;
