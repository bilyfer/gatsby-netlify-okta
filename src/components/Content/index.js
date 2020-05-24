import React from 'react'

function Content({ children }) {
  return (
    <div id="main" className="post-9543 page type-page status-publish has-post-thumbnail hentry">
      <section id="primary" className="primary tabbed">
        {children}
      </section>
    </div>
  )
}

export default Content
