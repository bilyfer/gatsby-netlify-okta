import React from 'react'
import Login from '../components/Login/index'
import { getIdToken, isAuthenticated } from '../utils/auth'
import Layout from '../components/Layout/index'
import BreadCrumbs from '../components/BreadCrumbs/index'


class Account extends React.Component {
  state = { 
    user: false, 
    isAuthenticated: false,
    isLoading: true
  }

  componentDidMount() {
    this.showAccountInfo();
  }

  showAccountInfo = async () => {
    const result = await isAuthenticated()

    this.setState({ 
      isLoading: false
    })

    if (result) {
      const idToken = await getIdToken()
      if (idToken) {
        this.setState({ 
          user: idToken.claims.name, 
          isAuthenticated: true,
        })
      }
    }
  }

  render() {
    if (this.state.isLoading) return null;

    if (!this.state.isAuthenticated) {
      return (
        <>
          <Login/>      
        </>
      );
    }

    return (
      <Layout>
        <BreadCrumbs title='My Account' />
        <h1>My Account</h1>
        <React.Fragment>
          <p>Welcome, {this.state.user}</p>
        </React.Fragment>
      </Layout>
    )
  }
}

export default Account
