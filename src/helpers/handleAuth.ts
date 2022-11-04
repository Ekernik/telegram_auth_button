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

      const response = JSON.stringify(data, null, 2);

      console.log(response);
      handleCopyToClipboard(response);
    },
  );

function handleCopyToClipboard(message: string) {
  // navigator.clipboard only works over HTTPS
  if (navigator?.clipboard) {
    navigator.clipboard
      .writeText(message)
      .then(() => {
        alert(
          `${message}\n\nResponse also copied to your clipboard and logged to the console`,
        );
      })
      .catch(err => console.log(err));
  } else {
    alert(
      `${message}\n\nResponse logged to the console but couldn't be copied to your clipboard`,
    );
  }
}
