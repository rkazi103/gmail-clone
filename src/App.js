import React from "react";
import Header from "./components/header/";
import Sidebar from "./components/sidebar/";
import GlobalStyles from "./styles/globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Body } from "./AppStyle";
import Mail from "./components/mail/";
import EmailList from "./components/email-list/";
import SendMail from "./components/send-mail/";
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
