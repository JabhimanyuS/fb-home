import React from 'react'
import LeftSidebar from '../Sidebar/LeftSidebar'

import './index.scss'

function HamMenu(props) {
    return (
        <div className="ham-overlay">
            <div className="ham-menu">
                <LeftSidebar />
            </div>
        </div>
    )
}

export default HamMenu