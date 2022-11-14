import { Dispatch, SetStateAction } from 'react';

interface ResponseType {
  auth_date: number;
  first_name: string;
  hash: string;
  id: number;
  last_name: string;
  photo_url: string;
  username: string;
}

export const handleAuth = (
  setFunc: Dispatch<SetStateAction<string>> | null
) => {
  return window.Telegram.Login.auth(
    // Change Bot_Id to yours
    { bot_id: '5623289674' },
    (data: ResponseType) => {
      if (!data) {
        console.log('ERROR: something went wrong');
        return;
      }

      const response = JSON.stringify(data, null, 2);

      setFunc!(response);
      console.log(response);
    }
  );
};
