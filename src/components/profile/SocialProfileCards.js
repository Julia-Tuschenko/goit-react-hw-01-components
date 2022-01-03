import PropTypes from "prop-types";
import defaultImage from "../default.png";
import {
  Profile,
  Description,
  Avatar,
  Name,
  TagLocation,
  Stats,
  StatsList,
} from "./SocialProfileCards.styled";

export default function SocialProfileCards(props) {
  const {
    avatar = defaultImage,
    username = "not known",
    tag,
    location,
    stats,
  } = props;
  return (
    <Profile class="profile">
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <TagLocation>@{tag}</TagLocation>
        <TagLocation>{location}</TagLocation>
      </Description>

      <Stats class="stats">
        <StatsList>
          <span class="label">Followers</span>
          <span class="quantity">{stats.followers}</span>
        </StatsList>
        <StatsList>
          <span class="label">Views</span>
          <span class="quantity">{stats.views}</span>
        </StatsList>
        <StatsList>
          <span class="label">Likes</span>
          <span class="quantity">{stats.likes}</span>
        </StatsList>
      </Stats>
    </Profile>
  );
}

SocialProfileCards.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
