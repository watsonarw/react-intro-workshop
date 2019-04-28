import React from 'react';
import styled from 'styled-components';

const Message = (props) => {
  return (
    <MessageCard>
      { props.title ? (<MessageTitle>{props.title}</MessageTitle>) : null }
      <span>{props.children}</span>
    </MessageCard>
  );
};

const MessageCard = styled.article`
  background-color: #efefef;
  box-shadow: 4px 8px #ccc;
  border-radius: 4px;
  padding: 8px;
  margin: 16px;
`;

const MessageTitle = styled.h4`
  margin: 0;
  border-bottom: 1px solid #ccc;
  padding-bottom: 4px;
  font-size: 40px;
  line-height: 1;
  font-weight: normal;
`;

export default Message;
