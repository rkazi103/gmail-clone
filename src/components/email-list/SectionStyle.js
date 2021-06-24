import styled, { css } from "styled-components";

export const Container = styled.div`
  border-bottom: 3px solid ${(props) => props.color};
  color: ${(props) => props.selected && props.color} !important;
  display: flex;
  align-items: center;
  border-bottom-width: 2px;
  padding: 15px;
  min-width: 200px;
  cursor: pointer;
  color: grey;
  border-width: 0 !important;

  &:hover {
    background-color: whitesmoke;
    border-width: 3px !important;
  }

  > h4 {
    font-size: 14px;
    margin-left: 15px;
  }

  ${(props) =>
    props.selected
      ? css`
          background-color: whitesmoke;
          border-width: 3px !important;
        `
      : ""}
`;
