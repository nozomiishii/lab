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

const Field = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  animation: ${overgrow} 3s infinite alternate linear;
`;

const App = () => {
  // const [count, setCount] = useState(0);
  return (
    <Field>
      <span role="img" aria-label="img">
        🦕
      </span>
    </Field>
  );
};

export default App;
