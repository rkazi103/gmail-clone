import { Container } from "./SidebarOptionStyle";
import PropTypes from "prop-types";

const SidebarOption = ({ Icon, title, number, selected }) => {
  return (
    <Container selected={selected}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </Container>
  );
};

SidebarOption.propTypes = {
  Icon: PropTypes.object,
  title: PropTypes.string,
  number: PropTypes.number,
};

export default SidebarOption;
