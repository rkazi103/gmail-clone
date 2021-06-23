import React from "react";
import Header from "./components/header/";
import Sidebar from "./components/sidebar/";
import GlobalStyles from "./styles/globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Body } from "./AppStyle";
import Mail from "./components/mail/";
import EmailList from "./components/email-list/";

function App() {
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
      </Container>
    </Router>
  );
}

export default App;
