import React from 'react'

const Logo = ({ logo }) => {
  return (
    <div className="logo">
      <img className="logo-img" src={logo} alt="logo" />
    </div>
  )
}

export default Logo