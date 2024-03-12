import Avatar from "./Avatar";
import { useCollection } from "../hooks/useCollection";
//styles
import "./OnlineUser.css";

export default function OnlineUser() {
  const { isPending, error, documents } = useCollection("user");
  return (
    <div className="user-list">
      <h2>All User</h2>
      {isPending && <div>Loading users...</div>}
      {error && <div>{error}</div>}
      {documents &&
        documents.map((user) => (
          <div key={user.id} className="user-list-item">
            {user.online && <span className="online-user"></span>}
            <span>{user.displayName}</span>
            <Avatar src={user.photoURL} />
          </div>
        ))}
    </div>
  );
}
