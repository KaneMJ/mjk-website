import React, { Component } from 'react';
import { Segment, Form, Input, Modal, Button } from 'semantic-ui-react';
import ChatMessage from './ChatMessage';

class Chat extends Component {
  state = {
    sendMessage: '',
    name: '',
    getName: true,
    id: 0,
    messages: [
      {
        sender: 'Jane',
        message: 'I love the mall, and my name is Jane, yay',
        id: 0,
      },
      {
        sender: 'Matt',
        message: 'You sound kind of lame Jane',
        id: 1,
      }
    ],
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleMessageSubmit() {
    const message = {
      sender: this.state.name,
      message: this.state.sendMessage,
      id: this.state.id,
    }
    this.setState(previousState => ({
      messages: [...previousState.messages, message],
      sendMessage: '',
      id: this.state.id + 1,
    }));
  }

  handleNameSubmit() {
    this.setState({
      getName: false
    })
  }

  render() {
    const { sendMessage, messages, getName } = this.state;
    return (
      <div style={{ marginTop: '20px' }} className='ui very padded container'>
        <h3 className='center'>Chat</h3>
        <ChatMessage messages={messages}/>
        <Segment>
          <Form onSubmit={() => this.handleMessageSubmit()}>
            <Input
              fluid
              name='sendMessage'
              action={{
                color: 'teal',
                labelPosition: 'right',
                icon: 'send',
                content: 'Send',
              }}
              onChange={(e) => { this.handleChange(e) }}
              value={sendMessage}>
            </Input>
          </Form>
        </Segment>
        <Modal 
          open={getName}
          basic
          size='small'
        >
          <Modal.Header style={{textAlign: 'center'}}>Please choose a display name</Modal.Header>
          <Modal.Content style={{textAlign: 'center'}}><Input style={{textAlign: 'center'}} name='name' onChange={(e) => { this.handleChange(e) }}></Input></Modal.Content>
          <Modal.Actions style={{textAlign: 'center'}}>
            <Button 
              color='teal'
              onClick={() => this.handleNameSubmit()}
            >
              Confirm
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default Chat;