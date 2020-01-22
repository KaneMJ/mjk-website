import React, { Component, Fragment } from "react";
import Navbar from '../Navbar'

class Chat extends Component {
  handleChange = e => {
    console.log("Hey we are here", e);
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <div style={{ marginTop: "20px" }} className="ui very padded container">
          <h3 className="center">Chat</h3>
          <div
            className="ui segment"
            style={{ height: "calc(100vh - 300px)" }}
          ></div>
          <div class="ui action input" style={{ width: "100%" }}>
            <input
              type="text"
              placeholder="Message..."
              onChange={e => {
                this.handleChange(e);
              }}
            />
            <button class="ui primary button">Send</button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Chat;
