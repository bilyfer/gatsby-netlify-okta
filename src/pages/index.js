import React from 'react'
import Layout from "../components/Layout/index"
import BlogRoll from "../components/BlogRoll/index"

export default () => {
  const query = window.location.search;

  if (query.includes('code=') && query.includes('state=')) {
    window.history.replaceState({}, document.title, '/');
  }

  return (
    <Layout>
      <BlogRoll />
    </Layout>)
}
