import React from 'react'
import './Header.css'
import logo1 from '../../img/O-mark.svg'
import logo2 from '../../img/X-mark.svg'

function Header() {
  return (
    <div id='home-header'>
        <img id='home-o' src={logo1} alt='x'/>
        <img id='home-x' src={logo2} alt='o'/>
    </div>
  )
}

export default Header