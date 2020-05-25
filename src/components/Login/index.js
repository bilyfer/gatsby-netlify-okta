import React from 'react'
import { Link } from 'gatsby'
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css'
import { signIn, getSession } from '../../services/auth'

export default class Login extends React.Component {
    state = {
        showReturnLink: false
    }

    async componentDidMount() {
        const session = await getSession()

        if (session.status !== 'ACTIVE') {
            signIn.remove()
            signIn.renderEl({ el: '#signIn' })

            this.setState({
                showReturnLink: true
            })
        }
    }

    render() {
        return (
            <>
                <div id="signIn" />
                {
                    this.state.showReturnLink &&
                    <div className="account-nav-container">
                        <Link to="/">Go Back to Home Page</Link>
                    </div>
                }
            </>
        )
    }
}
