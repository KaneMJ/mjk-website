import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import ACTIONS from './Login/loginActions'

const Navbar = (props) => {

  console.log("NavBar Props =>", props.user);
  return (
    <div className='ui inverted basic segment'>
      <div className='ui inverted secondary pointing menu'>
        <NavLink exact to='/' className='item' >
          Home
        </NavLink>
        <NavLink to='/chat' className='item'>
          Chat
        </NavLink>
        <NavLink to='/about' className='item'>
          About
        </NavLink>
        <NavLink to='/contact' className='item'>
          Contact
        </NavLink>
        {props.user && (
        <div className='right menu'>
        <a className='item'>{props.user}</a>
        </div>
        )}
      </div>
    </div>
  )
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
)(Navbar);