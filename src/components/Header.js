import {
  Container,
  InputCaret,
  Leftside,
  Middle,
  Rightside,
} from "../styles/HeaderStyle";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { IconButton, Avatar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { auth } from "../services/firebase";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <Container>
      <Leftside>
        <IconButton>
          <MenuIcon />
        </IconButton>

        <img
          src="https://cdn.vox-cdn.com/thumbor/9SvBnlIrQ82W2pbwmriNumdd0g4=/0x0:1320x880/1220x813/filters:focal(555x335:765x545):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67587450/newgmaillogo.0.jpg"
          alt="Gmail Logo"
        />
      </Leftside>

      <Middle>
        <SearchIcon />
        <input type="text" placeholder="Search mail" />
        <IconButton>
          <InputCaret />
        </IconButton>
      </Middle>

      <Rightside>
        <IconButton>
          <AppsIcon />
        </IconButton>

        <IconButton>
          <NotificationsIcon />
        </IconButton>

        <Avatar
          style={{ cursor: "pointer" }}
          onClick={signOut}
          src={user?.photoUrl}
        />
      </Rightside>
    </Container>
  );
};

export default Header;
