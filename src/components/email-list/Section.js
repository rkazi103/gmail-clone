import { Container } from "./SectionStyle";
import PropTypes from "prop-types";

const Section = ({ Icon, title, color, selected }) => {
  return (
    <Container selected={selected} color={color}>
      <Icon />
      <h4>{title}</h4>
    </Container>
  );
};

Section.propTypes = {
  Icon: PropTypes.object,
  title: PropTypes.string,
  color: PropTypes.string,
  selected: PropTypes.bool,
};

export default Section;
