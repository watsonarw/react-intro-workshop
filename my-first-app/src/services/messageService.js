// Use fetch here in real app

export const fetchMessages = async () => {
  const messagesJson = localStorage.getItem('messages');
  return await new Promise((resolve) => {
    setTimeout(() => {
      const data = messagesJson ? JSON.parse(messagesJson) : [];
      resolve(data);
    }, 1000);
  });
};

export const createMessage = async (message) => {
  const currentMessages = await fetchMessages();
  const newMessages = [
    ...currentMessages,
    message
  ];
  localStorage.setItem('messages', JSON.stringify(newMessages));
  return true
};
