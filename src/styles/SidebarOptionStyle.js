import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 10px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  cursor: pointer;
  color: #818181;

  > p {
    display: ${(props) => (props.selected ? "inline !important" : "none")};
    font-weight: 300;
  }

  > h3 {
    flex: 1;
    margin-left: 10px;
    font-size: 14px;
    font-weight: 400;
  }

  > .MuiSvgIcon-root {
    padding: 5px;
  }

  &:hover,
  &:hover > p,
  &:hover > h3 {
    background-color: #fcecec;
    color: #c04b37;
    font-weight: 800 !important;
  }

  &:hover {
    > p {
      display: inline;
    }
  }

  ${(props) =>
    props.selected
      ? css`
          ,
          p,
          h3 {
            background-color: #fcecec;
            color: #c04b37;
            font-weight: 800 !important;
          }
        `
      : ""}
`;
