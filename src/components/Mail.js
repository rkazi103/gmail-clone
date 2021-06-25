import {
  Container,
  Tools,
  ToolsLeft,
  ToolsRight,
  Body,
  BodyHeader,
  BodyImportant,
  Message,
  Time,
} from "../styles/MailStyle";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import PrintIcon from "@material-ui/icons/Print";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useSelector } from "react-redux";
import { selectOpenMail } from "../features/mailSlice";

const Mail = () => {
  const history = useHistory();
  const selectedMail = useSelector(selectOpenMail);

  return (
    <Container>
      <Tools>
        <ToolsLeft>
          <IconButton onClick={() => history.push("/")}>
            <ArrowBackIcon />
          </IconButton>

          <IconButton>
            <MoveToInboxIcon />
          </IconButton>

          <IconButton>
            <ErrorIcon />
          </IconButton>

          <IconButton>
            <DeleteIcon />
          </IconButton>

          <IconButton>
            <EmailIcon />
          </IconButton>

          <IconButton>
            <WatchLaterIcon />
          </IconButton>

          <IconButton>
            <CheckCircleIcon />
          </IconButton>

          <IconButton>
            <LabelImportantIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </ToolsLeft>

        <ToolsRight>
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>

          <IconButton>
            <PrintIcon />
          </IconButton>

          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </ToolsRight>
      </Tools>

      <Body>
        <BodyHeader>
          <h2>{selectedMail?.subject}</h2>
          <BodyImportant />
          <p>{selectedMail?.title}</p>
          <Time>{selectedMail?.time}</Time>
        </BodyHeader>

        <Message>
          <p>{selectedMail?.description}</p>
        </Message>
      </Body>
    </Container>
  );
};

export default Mail;
