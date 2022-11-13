export const copyText = (message: string) => {
  // navigator.clipboard only works over HTTPS
  try {
    navigator.clipboard.writeText(message);
  } catch (error) {
    console.log(error);
  }
};
