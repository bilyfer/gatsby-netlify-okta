import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

function BreadCrumbs({ title }) {
    return (
        <nav>
            <ul className="breadcrumbs">
                <li>
                    <Link to="/">News</Link>
                </li>
                <li>{title}</li>
            </ul>
        </nav>
    )
}

BreadCrumbs.propTypes = {
    title: PropTypes.string
}

export default BreadCrumbs
