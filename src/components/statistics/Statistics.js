import PropTypes from "prop-types";
import { Item, Label, Percentage } from "./Statistics.styled";

export default function Statistics({ label, percentage }) {
  return (
    <Item>
      <Label>{label}</Label>
      <Percentage>{percentage}</Percentage>
    </Item>
  );
}

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
