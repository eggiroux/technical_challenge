import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { requestFeedData } from "../Store/actions";

export const FeedSwitcher = () => {
  const dispatch = useDispatch();
  const [activeFeed, setActiveFeed] = React.useState(1);

  const [topic1, setTopic1] = React.useState("donald trump");
  const [topic2, setTopic2] = React.useState("hillary clinton");
  const [requestUrl, setRequestUrl] = React.useState(`${topic1}`);

  const [topicInput, setTopicInput] = React.useState("");

  React.useEffect(() => {
    if (activeFeed === 1) {
      setRequestUrl(`/tweets/${topic1}`);
    } else {
      setRequestUrl(`/tweets/${topic2}`);
    }
  }, [activeFeed, topic1, topic2]);

  React.useEffect(() => {
    dispatch(requestFeedData(requestUrl));
  }, [requestUrl]);

  const changeCurrentTopic = (newTopic) => {
    setTopicInput("");
    if (activeFeed === 1) {
      setTopic1(newTopic);
    } else {
      setTopic2(newTopic);
    }
  };

  return (
    <Wrapper>
      <ButtonsArea>
        <SwitchTopicButton
          onClick={() => {
            setActiveFeed(1);
          }}
          disabled={activeFeed === 1}
        >
          {activeFeed === 1 ? "Showing: " : "Switch to:"}
          <TopicP>{topic1}</TopicP>
        </SwitchTopicButton>
        <SwitchTopicButton
          onClick={() => {
            setActiveFeed(2);
          }}
          disabled={activeFeed === 2}
        >
          {activeFeed === 2 ? "Showing: " : "Switch to:"}
          <TopicP>{topic2}</TopicP>
        </SwitchTopicButton>
      </ButtonsArea>

      <StyledForm
        onSubmit={(ev) => {
          ev.preventDefault();
          changeCurrentTopic(topicInput);
        }}
      >
        <StyledLabel>
          Change Current Topic{" "}
          <span>{`(${activeFeed === 1 ? topic1 : topic2})`}</span>
        </StyledLabel>
        <TopicInput
          type={"text"}
          placeholder={`New Topic`}
          value={topicInput}
          onChange={(ev) => {
            setTopicInput(ev.target.value);
          }}
        ></TopicInput>
        <StyledButton type={"submit"}>Go!</StyledButton>
      </StyledForm>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 16px;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 2;
  margin-left: -16px;
  margin-right: -16px;
  border-bottom: 1px solid lightgrey;
`;

const ButtonsArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  margin-left: 2px;
  height: 28px;
  border-radius: 6px;
`;

const SwitchTopicButton = styled.button`
  padding: 6px 8px;
  border-radius: 6px;

  &:hover {
    cursor: pointer;
    transform: scale(1.12);
    transition: all 120ms;
  }

  &:disabled {
    color: black;
    border: 1px solid grey;
    &:hover {
      cursor: default;
    }
  }
`;

const TopicP = styled.p`
  margin: 0;
  margin-top: 4px;
`;

const TopicInput = styled.input`
  margin-top: 8px;
  line-height: 1.5rem;
  width: 250px;
  border-radius: 6px;
  outline: none;
`;

const StyledForm = styled.form`
  margin-top: 12px;
`;

const StyledLabel = styled.label`
  & span {
    font-size: 0.8rem;
    color: grey;
  }
`;
