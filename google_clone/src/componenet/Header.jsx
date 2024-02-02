import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <div className='header-container'>
      <div className="logo">King's Crypto</div>
      <div className="menu">
        <div className="menu-list">
            <a href="/">App</a>
            <a href="/">Product</a>
            <a href="/">Wallet</a>
            <a href="/">Current</a>
            <a href="/">Service</a>
        </div>
        <button className='hamburger'><RxHamburgerMenu/></button>
      </div>
      <div className="wallet-btn">
        <button>Enter app</button>
      </div>
    </div>
  )
}

export default Header
