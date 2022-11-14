import { ButtonHTMLAttributes, FC, useContext } from 'react';
import { MessageContext } from '../context/messageContext';
import { handleAuth } from '../helpers/handleAuth';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = () => {
  const { setMessage } = useContext(MessageContext);

  const handleClick = () => {
    handleAuth(setMessage);
  };

  return (
    <button id="btn_auth" onClick={handleClick}>
      Login with Telegram
    </button>
  );
};

export default Button;
