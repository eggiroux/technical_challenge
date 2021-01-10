import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { GrUpdate } from "react-icons/gr";

export const LoadingSpinner = ({ size = "30px" }) => {
  const spinAnimation = useSpring({
    transform: `rotate(360)`,
    from: {
      transform: `rotate(0deg)`,
    },
    config: {
      tension: 1.5,
      friction: 0,
    },
  });
  return (
    <Wrapper>
      <AnimBox style={spinAnimation}>
        <GrUpdate size={size} color="#666" />
      </AnimBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 24px;
  width: 100%;
`;

const AnimBox = styled(animated.div)`
  margin: 0 auto;
  display: flex;
  align-items: start;
  justify-content: center;
`;
