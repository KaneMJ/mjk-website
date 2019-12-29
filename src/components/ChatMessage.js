import React from 'react';
import { Segment } from 'semantic-ui-react'
const ChatMessage = props => {
  const messages = props.messages.map((item) => <div key={item.id}><b>{item.sender}</b>: {item.message}</div>)
  return (
      
    <Segment style={{ height: 'calc(100vh - 240px)' }}>
      {messages}
    </Segment>
  );
}

export default ChatMessage