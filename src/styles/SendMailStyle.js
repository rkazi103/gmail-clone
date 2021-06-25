import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  right: 50px;
  background-color: #404040;
  width: 40%;
  height: 40%;
  max-width: 500px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid whitesmoke;
  box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);

  > form {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  > form > input {
    height: 30px;
    padding: 10px;
    border: none;
    border-bottom: 1px solid whitesmoke;
    outline: none;
  }
`;

export const Message = styled.input`
  flex: 1;
`;

export const Header = styled.div`
  padding: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: gray;

  > h3 {
    color: whitesmoke;
    font-size: 13px;
  }
`;

export const Close = styled(CloseIcon)`
  cursor: pointer;
`;

export const Options = styled.div``;

export const SendButton = styled(Button)`
  background-color: #3079ed !important;
  text-transform: capitalize !important;
  margin: 15px !important;
`;

export const ErrorMessage = styled.p`
  background-color: white;
  color: red;
  text-align: right;
  padding: 2px;
`;
