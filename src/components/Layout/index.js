import React from 'react'
import Header from '../Header/index'
import Content from '../Content/index'
import Footer from '../Footer/index'
import AccountButton from '../AccountButton/index'

export default function Layout({ children, backgroundImageClass }) {
  return (
    <div className='page-template-template-tabbed page page-parent page-company has-post-thumbnail tabbed-pages masthead-not-fixed ready'>
      <Header backgroundImageClass={backgroundImageClass} />
      <Content>
        {children}
      </Content>
      <Footer />
      <AccountButton />
    </div>
  )
}
