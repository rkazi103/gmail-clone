import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Body } from "./AppStyle";
import Mail from "./components/Mail";
import EmailList from "./components/EmaiList";
import SendMail from "./components/SendMail";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";

const App = () => {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  return (
    <Router>
      <Container>
        <GlobalStyles />

        <Header />

        <Body>
          <Sidebar />

          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>

            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </Body>

        {sendMessageIsOpen && <SendMail />}
      </Container>
    </Router>
  );
};

export default App;
