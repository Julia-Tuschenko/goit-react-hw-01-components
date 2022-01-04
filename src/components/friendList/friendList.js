import Friend from './Friend';
import { FriendListUl } from './Friend.styled';
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <FriendListUl>
      {friends.map(friend => (
        <Friend
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </FriendListUl>
  );
}

FriendList.propTypes = {
  key: PropTypes.number.isRequired,
};
