import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/Layout/index"
import BreadCrumbs from "../components/BreadCrumbs/index"

export default () => {
  return (
    <Layout>
      <BreadCrumbs title="404" />
      <h1>404 Page Not Found</h1>
      <p><Link to="/">Return to Home</Link></p>
    </Layout>)
}
