import React from 'react'
import { navigate } from '@reach/router'
import { Link } from 'gatsby'
import { ActionItem, DropDownMenu, DropDownDirection } from 'react-dropdown-advanced'
import 'react-dropdown-advanced/styles/rdropdown.css'
import { isAuthenticated, getUserName, signOut } from '../../services/auth'
import { getNameInitials } from '../../utils/index'
import styles from "./content.module.css"

export default class AccountButton extends React.Component {
    state = {
        userName: '',
        isAuthenticated: false,
        isLoading: true,
        fixedItems: []
    }

    async componentDidMount() {
        this.setAuthInfo()
        this.addDropDownItems()
    }

    setAuthInfo = async () => {
        const result = await isAuthenticated()

        if (result) {
            const userName = await getUserName()

            this.setState({
                isAuthenticated: true,
                userName: getNameInitials(userName),
                isLoading: false
            })
        } else {
            this.setState({
                isLoading: false
            })       
        }
    }

    addDropDownItems = () => {
        const profileItem = new ActionItem("profile", "Profile", "fa-user-o")
        const signOutItem = new ActionItem("signout", "Sign Out", "fa-download")

        this.state.fixedItems.push(profileItem, signOutItem)
        this.setState({ fixedItems: this.state.fixedItems })
    }

    onDropdownItemClick = item => {
        switch (item.key) {
            case 'profile':
                navigate('/account')
                break
            case 'signout': {
                signOut()
                this.setState({ isAuthenticated: false })
                break
            }
            default:
                break
        }
    }

    render() {
        if (this.state.isLoading) {
            return null
        }

        return ((
            <div id="account-container" className={this.state.isAuthenticated ? styles.userMenu : ''}>
                {!this.state.isAuthenticated ?
                    <Link to="/account">
                        <span className="button news buttons-dark">Sign In</span>
                    </Link> :
                    <div>
                        {this.state.userName}
                        <DropDownMenu
                            items={this.state.fixedItems}
                            onClick={this.onDropdownItemClick}
                            direction={DropDownDirection.DownLeft}
                        />
                    </div>
                }
            </div>)
        )
    }
}
