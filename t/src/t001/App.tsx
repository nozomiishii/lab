import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Modal } from "../components";

const overgrow = keyframes`
  0%{
    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
  }
  100%{
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  }
`;

const shake = keyframes`
  0%{
    transform: scale(1) rotate(0deg);
  }
  50%{
    transform: scale(0.5) rotate(180deg);
  }
  100%{
    transform: scale(1.5) rotate(360deg);
  }
`;

const Field = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  animation: ${overgrow} 3s infinite alternate linear;
`;

const Box = styled.div<{ size: number }>`
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
  span {
    display: inline-block;
    font-size: ${({ size }) => size + "rem"};
    animation: ${shake} 4s infinite linear both alternate;
  }
`;

const App = () => {
  const [count, setCount] = useState(3);

  return (
    <>
      <Modal title="React Lab" />
      <Field>
        <Box onClick={() => setCount((prev) => prev + 1)} size={count}>
          <span role="img" aria-label="img">
            🦕
          </span>
        </Box>
      </Field>
    </>
  );
};

export default App;
