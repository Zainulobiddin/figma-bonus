import React from 'react'
import './header.css'

import Button from '../button/button'
import logo from '#/logo.svg'
const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt="" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Company</li>
        <li>Pages</li>
        <li>Blog</li>
        <li>Shop</li>
      </ul>

      <Button>Get Started</Button>
    </div>
  )
}

export default Header
