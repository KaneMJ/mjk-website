import React, { Component } from "react";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    console.log("Hey we are here", e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="ui fluid container">
        <div
          className="ui one column stackable centered page grid"
          style={{ marginTop: "35vh" }}
        >
          <div className="column" style={{ maxWidth: 600 }}>
            <div className='ui padded segment'>
            <div className="ui form">
              <div className="field">
                <label>Username</label>
                <input
                  value={this.state.username}
                  onChange={e => this.handleChange(e)}
                  type="text"
                  name="username"
                />
              </div>
              <div className="field">
                <label>Password</label>
                <input
                  value={this.state.password}
                  onChange={e => this.handleChange(e)}
                  type="password"
                  name="password"
                />
              </div>
            </div>
            <div className="ui submit black button" style={{marginTop: '20px'}}>Submit</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
