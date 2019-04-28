import { useState, useEffect } from 'react';
import { fetchMessages } from './services/messageService';

export const useMessageLoader = () => {
    const [messages, setMessages] = useState([]);
    const [isLoadingMessages, setIsLoadingMessages] = useState(true);

    useEffect(() => {
      const getMessages = async () => {
        setIsLoadingMessages(true);
        const messagesFromApi = await fetchMessages();
        setMessages(messagesFromApi);
        setIsLoadingMessages(false);
      }
      getMessages();
    }, []);

    return { messages, isLoadingMessages };
  }
