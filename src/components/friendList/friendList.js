import Friend from "./friend";
import { FriendListUl } from "./Friend.styled";

export default function FriendList({ friends }) {
  return (
    <FriendListUl>
      {friends.map((friend) => (
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
