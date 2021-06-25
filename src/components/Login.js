import { Container, LoginContainer } from "../styles/LoginStyle";
import { Button } from "@material-ui/core";
import { auth, provider } from "../services/firebase";
import { login } from "../features/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            emal: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((err) => alert(err.message));
  };

  return (
    <Container>
      <LoginContainer>
        <img
          src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Gmail.max-500x500.png"
          alt="Gmail Logo"
        />
        <Button variant="contained" color="primary" onClick={signIn}>
          Login to Gmail
        </Button>
      </LoginContainer>
    </Container>
  );
};

export default Login;
