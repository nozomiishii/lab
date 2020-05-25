import React, { FC, useState } from "react";
import styled from "styled-components";

const Div = styled.div<{ game: boolean }>`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 100;
  background: white;
  display: ${({ game }) => (game ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

interface ModalProps {
  title: string;
}

const Modal: FC<ModalProps> = ({ title }) => {
  const [start, setStart] = useState(false);
  return (
    <Div game={start}>
      <h1>{title}</h1>
      <button onClick={() => setStart(true)}>start</button>
    </Div>
  );
};

export default Modal;
