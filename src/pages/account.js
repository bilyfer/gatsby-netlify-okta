import React from 'react'
import Login from '../components/Login/index'
import { getUserName, isAuthenticated } from '../services/auth'
import Layout from '../components/Layout/index'
import BreadCrumbs from '../components/BreadCrumbs/index'


class Account extends React.Component {
  state = {
    userName: '',
    isAuthenticated: false,
    isLoading: true
  }

  componentDidMount() {
    this.setAccountInfo()
  }

  setAccountInfo = async () => {
    const result = await isAuthenticated()

    if (result) {
      this.setState({
        userName: await getUserName(),
        isAuthenticated: true,
        isLoading: false
      })
    } else {
      this.setState({
        isLoading: false
      })
    }
  }

  render() {
    if (this.state.isLoading) return null

    if (!this.state.isAuthenticated) {
      return (
        <>
          <Login />
        </>
      )
    }

    return (
      <Layout>
        <BreadCrumbs title='My Account' />
        <h1>My Account</h1>
        <React.Fragment>
          <p>Welcome, {this.state.userName}</p>
        </React.Fragment>
      </Layout>
    )
  }
}

export default Account
