import React from 'react'
import Logo from "./logo"
import styles from "./content.module.css"
 
function Header() { 
  return (
    <>
      <Logo />
      <header id="hero" className="hero-default">
          <div id="hero-bg" className={`hero-bg ${styles.heroBg}`} ></div>
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
 
export default Header
