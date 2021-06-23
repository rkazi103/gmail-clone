import styled from "styled-components";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid whitesmoke;
`;

export const Leftside = styled.div`
  display: flex;
  align-items: center;

  > img {
    object-fit: contain;
    height: 80px;
    margin-left: 5px;
  }
`;

export const Middle = styled.div`
  display: flex;
  align-items: center;
  flex: 0.7;
  background-color: whitesmoke;
  padding: 10px;
  border-radius: 5px;

  > .MuiSvgIcon-root {
    color: grey;
  }

  > input {
    border: none;
    outline: none;
    width: 100%;
    padding: 10px;
    font-size: medium;
    background-color: transparent;
  }
`;

export const InputCaret = styled(ArrowDropDownIcon)``;

export const Rightside = styled.div`
  display: flex;
  padding-right: 20px;
`;
