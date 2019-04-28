// Use fetch here in real app

export const fetchMessages = async () => {
  const messagesJson = localStorage.getItem('messages');
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(JSON.parse(messagesJson) || []);
    }, 2000);
  });
};
