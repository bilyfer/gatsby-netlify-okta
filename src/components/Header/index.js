import React from 'react'
import PropTypes from 'prop-types'
import Logo from "./logo"
import styles from "./content.module.css"

function Header({ backgroundImageClass }) {
  return (
    <>
      <Logo />
      <header id="hero" className="hero-default">
        <div
          id="hero-bg"
          className={`hero-bg ${backgroundImageClass ? styles[backgroundImageClass] : styles.mainBg}`}
        ></div>
        <div className="hero-inner">
          <div className="hero-titles">
            <h1>Featured News</h1>
            <h2>UMG</h2>
          </div>
        </div>
      </header>
    </>
  )
}

Header.propTypes = {
  backgroundImageClass: PropTypes.string
}

export default Header