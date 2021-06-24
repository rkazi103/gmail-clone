import styled from "styled-components";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";

export const Container = styled.div`
  flex: 1;
  background-color: whitesmoke;
`;

export const Tools = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
`;

export const ToolsLeft = styled.div`
  display: flex;
`;

export const ToolsRight = styled.div``;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  background-color: white;
  padding: 20px;
  height: 100vh;
  box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
`;

export const BodyHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid whitesmoke;
  padding: 20px;
  position: relative;

  > h2 {
    font-weight: 400;
    margin-right: 20px;
  }

  > p {
    margin-left: 20px;
  }
`;

export const BodyImportant = styled(LabelImportantIcon)`
  color: #e8ab02 !important;
`;

export const Time = styled.p`
  position: absolute;
  top: 24px;
  right: 0;
  font-size: 12px;
  color: gray;
`;

export const Message = styled.div`
  > p {
    padding: 10px;
    margin-right: 20px;
    overflow-wrap: break-word;
  }
`;
