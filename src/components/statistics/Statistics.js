import PropTypes from "prop-types";
import { Item, Label, Percentage } from "./Statistics.styled";

export default function Statistics({ label, percentage }) {
  return (
    <Item class="item">
      <Label class="label">{label}</Label>
      <Percentage class="percentage">{percentage}</Percentage>
    </Item>
  );
}

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
