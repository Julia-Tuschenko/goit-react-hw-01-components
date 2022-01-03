import PropTypes from "prop-types";
import defaultImage from "../default.png";

export default function Friend({ avatar = defaultImage, name, isOnline }) {
  return (
    <li class="item">
      <span class="status">{isOnline ? "Mimo" : "Tochka"}</span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </li>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
