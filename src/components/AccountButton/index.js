import React from 'react'
import { isAuthenticated, signOut } from '../../utils/auth'
import { Link } from 'gatsby'

export default class AccountButton extends React.Component {
    state = {
        isAuthenticated: false,
        isLoading: true
    }

    async componentDidMount() {
        this.setState({ 
            isAuthenticated: await isAuthenticated(),
            isLoading: false
        })
    }

    onSignOut = () => {
        signOut();
        this.setState({ isAuthenticated: false })
    }

    render() {
        if (this.state.isLoading) {
            return null;
        }

        return ((
            <div id="account-container">
                { !this.state.isAuthenticated ?
                    <Link to="/account">
                        <span className="button news buttons-dark">Sign In</span>
                    </Link> :
                    <button className="btn sign-out" onClick={() => this.onSignOut()}>
                        <span className="button news buttons-dark">Sign Out</span>
                    </button>
                }
            </div>)
        )
    }
}
