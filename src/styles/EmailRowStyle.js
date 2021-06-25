import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid whitesmoke;
  cursor: pointer;
  z-index: 999;

  &:hover {
    border-top: 1px solid whitesmoke;
    box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.24);
  }
`;

export const Options = styled.div`
  display: flex;
`;

export const Title = styled.h3`
  font-size: 13px;
  flex: 0.3;
`;

export const Message = styled.div`
  display: flex;
  flex: 0.8;
  align-items: center;
  font-size: 13px;

  > h4 {
    width: 400px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 5px;
    padding-right: 5px;
  }
`;

export const Description = styled.span`
  font-weight: 400;
  color: gray;
`;

export const Time = styled.p`
  padding-right: 15px;
  font-size: 9px;
  font-weight: bold;
`;
