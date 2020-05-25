import React from 'react'
import Logo from './logo'
import styles from './content.module.css'
import Context from '../../templates/context'

function Header() {
  const { backgroundImageClass, headerBottomTitle } = React.useContext(Context)

  return (
    <>
      <Logo />
      <header id="hero" className="hero-default">
        <div
          id="hero-bg"
          className={`hero-bg ${backgroundImageClass ? styles[backgroundImageClass] : styles.mainBg}`}
        ></div>
        {
          !headerBottomTitle ? (
            <div className="hero-inner">
              <div className="hero-titles">
                <h1>Featured News</h1>
                <h2>UMG</h2>
              </div>
            </div>
          ) : (
              <div className="single single-post althero">
                <div className="hero-inner">
                  <div className="hero-titles">
                    <h2>{headerBottomTitle}</h2>
                  </div>
                </div>
              </div>
            )
        }
      </header>
    </>
  )
}


export default Header
