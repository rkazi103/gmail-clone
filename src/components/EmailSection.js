import { Container } from "../styles/EmailSectionStyle";
import PropTypes from "prop-types";

const EmailSection = ({ Icon, title, color, selected }) => {
  return (
    <Container selected={selected} color={color}>
      <Icon />
      <h4>{title}</h4>
    </Container>
  );
};

EmailSection.propTypes = {
  Icon: PropTypes.object,
  title: PropTypes.string,
  color: PropTypes.string,
  selected: PropTypes.bool,
};

export default EmailSection;
