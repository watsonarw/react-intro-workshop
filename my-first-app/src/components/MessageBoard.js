import React from 'react';
import styled, { keyframes } from 'styled-components';
import Message from './Message';
import NewMessageSection from './NewMessageSection';
import { useMessageLoader } from '../hooks';

const MessageBoard = () => {
  const { messages, isLoadingMessages } = useMessageLoader();

  return (
    <MessageBoardWrapper>
      <h2>Andrew's Message Board</h2>
      { isLoadingMessages
          ? <Spinner/>
          : messages.map((message) => {
              return (<Message title={message.title}>{message.contents}</Message>);
            })
      }
      <NewMessageSection />
    </MessageBoardWrapper>
  );
}

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  border: 5px solid #aaa;
  border-top-color: purple;
  box-sizing: border-box;
  margin: 50px auto;
  animation: ${spin} 1s linear infinite
`;

const MessageBoardWrapper = styled.section`
  background-color: white;
  display: flex;
  flex-direction: column;
  color: #555;
  max-width: 90%;
  margin: auto;
  boarder-top: 1px solid black;
  text-align: left;
  padding: 0 32px;
`;

export default MessageBoard
