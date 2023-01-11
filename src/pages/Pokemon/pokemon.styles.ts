import styled from "styled-components";

export const ItemStyle = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  max-width: 80rem;
  gap: 3rem;
  font-size: 1.4rem;

  .title {
    font-weight: 700;
  }
`;

export const StatStyle = styled.p<{ stat: number }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  .stat {
    font-weight: 700;
    font-size: 1.4rem;
  }

  .rating {
    display: block;
    width: 20rem;
    height: 0.5rem;
    background: gray;
    position: relative;
    border: solid 0.1rem #91a4b9;

    &:before {
      content: "";
      position: absolute;
      display: block;
      height: 100%;
      left: 0;
      top: 0;
      background-color: ${({ stat }) =>
        stat < 50 ? "red" : stat > 70 ? "green" : "yellow"};
      width: ${({ stat }) => `${stat}%`};
    }
  }
`;

export const BackButtonStyle = styled.button`
  margin: auto;
  svg {
    margin-right: 1rem;
  }
`;
