import {
  Container,
  Options,
  Title,
  Message,
  Description,
  Time,
} from "./EmailRowStyle";
import PropTypes from "prop-types";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { Checkbox, IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const EmailRow = ({ title, subject, description, time, id }) => {
  const history = useHistory();

  return (
    <Container onClick={() => history.push("/mail")}>
      <Options>
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>

        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </Options>

      <Title>{title}</Title>

      <Message>
        <h4>
          {subject} - <Description>{description}</Description>
        </h4>
      </Message>

      <Time>{time}</Time>
    </Container>
  );
};

EmailRow.propTypes = {
  title: PropTypes.string,
  subject: PropTypes.string,
  description: PropTypes.string,
  time: PropTypes.any,
  id: PropTypes.any,
};

export default EmailRow;
