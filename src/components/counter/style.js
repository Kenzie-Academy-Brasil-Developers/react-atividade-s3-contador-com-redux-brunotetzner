import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(242, 23, 23, 1) 0%,
    rgba(18, 4, 23, 1) 0%,
    rgba(32, 19, 131, 1) 0%,
    rgba(247, 190, 113, 1) 0%,
    rgba(249, 95, 24, 1) 100%
  );

  button {
    width: 100px;
    height: 100px;
    border: 0;
    border-radius: 50%;
    background-color: red;
    color: white;
    font-size: 30px;
    font-weight: 800;
    :hover {
      border-bottom: 2px solid white;
    }
    :active {
      background-color: rgba(241, 71, 71, 0.8);
      width: 98px;
      height: 98px;
    }
  }
  p {
    margin: 10%;
    font-size: 30px;
    color: white;
  }
`;
