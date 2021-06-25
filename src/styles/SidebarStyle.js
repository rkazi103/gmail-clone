import styled from "styled-components";
import { Button } from "@material-ui/core";

export const Container = styled.div`
  flex: 0.3;
  max-width: 300px;
  padding-right: 20px;
`;

export const ComposeButton = styled(Button)`
  margin-top: 15px !important;
  margin-bottom: 15px !important;
  margin-left: 10px !important;
  text-transform: capitalize !important;
  color: gray !important;
  padding: 15px !important;
  border-radius: 30px !important;
  box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.75);
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
`;

export const FooterIcons = styled.div``;
