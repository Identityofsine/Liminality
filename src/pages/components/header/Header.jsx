import React from 'react'
import "./header.scss"
function Header() {
  return (
    <div className='header'>
      <img src='icons/fx.svg' className="inter" data-type="fx" alt='logo' onClick={() => window.location.href = "https://identityofsine.github.io/"}/>
      <span>Liminality</span>
      <div className='line'/>
    </div>
  )
}

export default Header