import PropTypes from "prop-types";
import defaultImage from "../default.png";
import { Item, Status, Avatar, Name } from "./Friend.styled";

export default function Friend({ avatar = defaultImage, name, isOnline }) {
  return (
    <Item>
      <Status statusIsOnline={isOnline}>{isOnline}</Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
