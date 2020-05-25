import React from 'react'
import { Link } from 'gatsby'

function Logo() {
  return (
    <div id="masthead" className="bg-method logo-container">
      <Link to="/">
        <div id="logo"></div>
      </Link>
    </div>
  )
}

export default Logo
