interface ResponseType {
  auth_date: number;
  first_name: string;
  hash: string;
  id: number;
  last_name: string;
  photo_url: string;
  username: string;
}

export const handleAuth = () =>
  window.Telegram.Login.auth(
    // Change Bot Id to yours
    { bot_id: '5623289674', request_access: true },
    (data: ResponseType) => {
      if (!data) {
        console.log('ERROR: something went wrong');
      }

      // Validate data here
      alert(JSON.stringify(data, null, 2));
      console.log(JSON.stringify(data, null, 2));
    },
  );
