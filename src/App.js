import React, { useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Body } from "./AppStyle";
import Mail from "./components/Mail";
import EmailList from "./components/EmaiList";
import SendMail from "./components/SendMail";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { login, selectUser } from "./features/userSlice";
import Login from "./components/Login";
import { auth } from "./services/firebase";

const App = () => {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            emal: user.email,
            photoUrl: user.photoURL,
          })
        );
      } else {
      }
    });
  }, [dispatch]);

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
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
      )}
    </Router>
  );
};

export default App;
