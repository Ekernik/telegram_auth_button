import React, { FC, HTMLAttributes } from 'react';

interface PropTypes {
  message: string;
}

const MessageBox: FC<PropTypes> = ({ message }) => {
  return (
    <div id='message-box' className={message ? 'active' : ''}>
      <h2>Response</h2>
      <pre>{message}</pre>
    </div>
  );
};

export default MessageBox;
