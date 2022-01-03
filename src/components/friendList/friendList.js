import Friend from "./friend";

export default function FriendList({ friends }) {
  return (
    <ul class="friend-list">
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </ul>
  );
}
