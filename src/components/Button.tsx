import { ButtonHTMLAttributes, FC } from 'react';
import { handleAuth } from '../helpers/handleAuth';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick?: () => void;
}

const Button: FC<ButtonProps> = ({ handleClick = handleAuth }) => (
  <button onClick={handleClick}>Login with Telegram</button>
);

export default Button;
