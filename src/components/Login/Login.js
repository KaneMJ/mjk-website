import React, { Component } from "react";
import ACTIONS from './loginActions'
import { connect } from "react-redux";

class Login extends Component {
  state = {
    username: "",
    password: "",
    usernameValid: '',
  };

  handleChange = e => {
    console.log("Hey we are here", e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    console.log("You clicked the submit button");
    if(this.state.username.length > 6){
      this.props.loginUser(this.state.username);
      this.props.history.push("/")
    } else {
      this.setState({ usernameValid: 'Username must be greater than 6 characters'})
    }
  }

  render() {
    const { usernameValid } = this.state;

    console.log("Right now we have this", this.props.user);

    return (
      <div className="ui fluid container">
        <h1>Hello - {this.props.user}</h1>
        <div
          className="ui one column stackable centered page grid"
          style={{ marginTop: "35vh" }}
        >
          <div className="column" style={{ maxWidth: 600 }}>
            <div className='ui padded segment'>
            <div className="ui form">
              <div className={usernameValid ? 'field error' : 'field'}>
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
            <div className="ui submit black button" style={{marginTop: '20px'}} onClick={this.handleSubmit}>Submit</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  loginUser: item => dispatch(ACTIONS.logUserIn(item)),
  logoutUser: id => dispatch(ACTIONS.logOutUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
