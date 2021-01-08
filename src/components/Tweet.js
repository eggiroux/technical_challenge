import React from "react";
import styled from "styled-components";

export const Tweet = ({ tweet }) => {
  return <Wrapper>{tweet.text}</Wrapper>;
};

const Wrapper = styled.div`
  margin-bottom: 20px;
  padding: 8px;
  background-color: white;
  border-radius: 6px;
`;
