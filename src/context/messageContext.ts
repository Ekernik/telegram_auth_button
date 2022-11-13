import { createContext, Dispatch, SetStateAction } from 'react';

type ContextType = {
  message: string;
  setMessage: Dispatch<SetStateAction<string>> | null;
};

const initialContext = {
  message: '',
  setMessage: null,
};

export const MessageContext = createContext<ContextType>(initialContext);
