import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

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
    transform: scale(1)
  }
  100%{
    transform: scale(1.5)
  }
`;

const Field = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  animation: ${overgrow} 3s infinite alternate linear;
`;

const Box = styled.div<{ onSize: number }>`
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
  span {
    display: inline-block;
    font-size: ${({ onSize }) => onSize + "rem"};
    animation: ${shake} 1s infinite alternate;
  }
`;

const App = () => {
  const [count, setCount] = useState(3);

  return (
    <Field>
      <Box onClick={() => setCount((prev) => prev + 1)} onSize={count}>
        <span role="img" aria-label="img">
          🦕
        </span>
      </Box>
    </Field>
  );
};

export default App;
