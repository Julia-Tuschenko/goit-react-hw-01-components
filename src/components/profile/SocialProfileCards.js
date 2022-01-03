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
    <Profile>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <TagLocation>@{tag}</TagLocation>
        <TagLocation>{location}</TagLocation>
      </Description>

      <Stats>
        <StatsList>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </StatsList>
        <StatsList>
          <span>Views</span>
          <span>{stats.views}</span>
        </StatsList>
        <StatsList>
          <span>Likes</span>
          <span>{stats.likes}</span>
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
