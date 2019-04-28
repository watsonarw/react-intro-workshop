import React from 'react';
import styled from 'styled-components';
import Message from './Message';

const MessageBoard = () => {
  return (
    <MessageBoardWrapper>
      <h2>Andrew's Message Board</h2>
      <Message title="Some title!">It's a message, yo!</Message>
      <Message title="A second message for the board!">
        We're learning react, this is fun isn't it?
      </Message>
      <Message>What if we don't want a title?</Message>
    </MessageBoardWrapper>
  );
}

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
