import { FC, useContext } from 'react';
import { MessageContext } from '../context/messageContext';

const MessageBox: FC = () => {
  const { message } = useContext(MessageContext);
  
  return (
    <div id='message-box' className={message ? 'active' : ''}>
      <h2>Response</h2>
      <pre>{message}</pre>
    </div>
  );
};

export default MessageBox;
