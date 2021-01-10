import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

export const Tweet = ({ tweet, name, handle }) => {
  return (
    <Wrapper>
      <Name>
        {name && name} @<Handle>{handle}</Handle>
      </Name>
      {tweet.text}
      <Date>
        {format(new window.Date(tweet.created_at), "MMM do, yyyy - hh:mm")}
      </Date>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 20px;
  padding: 8px;
  background-color: white;
  border-radius: 6px;

  &:hover {
    background-color: hsl(0deg, 0%, 97%);
  }
`;

const Name = styled.p`
  margin-top: 0px;
  font-weight: bold;
`;

const Handle = styled.span`
  font-weight: normal;
`;

const Date = styled.p`
  font-size: 0.7rem;
  margin-bottom: 2px;
`;
