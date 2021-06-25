import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;

  > img {
    object-fit: contain;
    height: 200px;
  }
`;
