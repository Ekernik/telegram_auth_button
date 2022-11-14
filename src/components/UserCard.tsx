import { FC, useContext } from 'react';
import { MessageContext } from '../context/messageContext';

const UserCard: FC = () => {
  const { message, setMessage } = useContext(MessageContext);
  if (!message) return <div id="userCard" />;

  const {
    first_name,
    last_name,
    username,
    photo_url,
    auth_date: date,
  } = JSON.parse(message);

  const auth_date = new Date(date * 1000);
  const dateStamp = auth_date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const timeStamp = auth_date.toLocaleTimeString();
  const auth_human_date = `${dateStamp} ${timeStamp}`;

  const handleSignOut = () => {
    setMessage!('');
  };

  return (
    <div id="userCard">
      <img src={photo_url} alt={`${first_name} ${last_name}`} />
      <div>
        <p id="name">
          {first_name} {last_name}
        </p>
        <p id="username">@{username}</p>
        <p id="date">{auth_human_date}</p>
        <button id="btn_logout" onClick={handleSignOut}>
          Sign out
        </button>
      </div>
    </div>
  );
};

export default UserCard;
