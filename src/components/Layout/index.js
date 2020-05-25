import React from 'react'
import Header from '../Header/index'
import Content from '../Content/index'
import Footer from '../Footer/index'
import AccountButton from '../AccountButton/index'

const layoutClassNames = 'page-template-template-tabbed page page-parent page-company has-post-thumbnail tabbed-pages masthead-not-fixed ready'

export default function Layout({ children }) {
  return (
    <div className={layoutClassNames}>
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
      <AccountButton />
    </div>
  )
}
