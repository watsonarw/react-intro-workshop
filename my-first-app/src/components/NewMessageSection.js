import React, { useState } from 'react';
import styled from 'styled-components';
import Message from './Message';
import { createMessage } from '../services/messageService';

const NewMessageSection = () => {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  return (
    <NewMessageSectionWrapper>
      <NewMessageInputs>
        <label htmlFor="title">Title</label>
        <input
          name="title"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
          data-testid="titleInput"
          />
        <label htmlFor="contents">Contents</label>
        <input
          name="contents"
          onChange={(event) => setContents(event.target.value)}
          value={contents}
          data-testid="contentsInput"
          />
        <button data-testid="saveButton" onClick={async () => {
          await createMessage({title, contents});
          setTitle('');
          setContents('');
        }}>Save</button>
      </NewMessageInputs>
      <Message data-testid="preview" title={title}>{contents}</Message>
    </NewMessageSectionWrapper>
  )
};

const NewMessageSectionWrapper = styled.section`
  margin-top: 16px;
  border-top: 1px solid #666;
  display: flex;
  flex-direction: column;
`;

const NewMessageInputs = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 16px;

  label {
    margin-top: 16px;
  }
  input {
    padding: 8px;
  }
`;

export default NewMessageSection;
