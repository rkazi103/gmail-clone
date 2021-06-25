import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  overflow: scroll;
`;

export const Settings = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid whitesmoke;
  background-color: white;
  z-index: 999;
  padding-right: 10px;
`;

export const SettingsLeft = styled.div``;

export const SettingsRight = styled.div``;

export const EmailSections = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  background-color: white;
  border-bottom: 1px solid whitesmoke;
  z-index: 999;
`;

export const List = styled.div`
  padding-bottom: 20%;
`;
