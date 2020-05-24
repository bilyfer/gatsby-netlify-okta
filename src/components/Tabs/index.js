import React from 'react'
import { Link } from 'gatsby'

function Tabs() {
    return (
        <ul className="tabs tabs-3">
            <li>
                <Link 
                    id="news-tab-a" 
                    className="tab button news-tab-a active"
                    to="/"
                >
                    News        
                </Link>
            </li>      
        </ul>
    )
}

export default Tabs
