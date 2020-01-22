import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <div className='ui inverted segment'>
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
      </div>
    </div>
  )
}

export default withRouter(Navbar);