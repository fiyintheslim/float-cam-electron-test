import styled from "styled-components";

export const MessageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;

  svg {
    color: red;
    font-size: 3rem;
  }

  p {
    font-size: 1.4rem;
  }

  button {
    background: none;
    cursor: pointer;
  }

  button svg {
    color: black;
  }
`;
