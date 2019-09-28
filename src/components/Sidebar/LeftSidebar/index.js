import React from 'react'
import Row from 'react-bootstrap/Row'

import './index.scss'

function LeftSidebar(props) {
    // In real scenario items will be fetched from API
    return (
        <React.Fragment>
            <Row noGutters="true" className="sidebar-items">
                <img className="profile-image" src="../../icons/Abhimanyu.jpg" alt="user" />
                <span>Abhimanyu Singh</span>
            </Row>
            <Row noGutters="true" className="sidebar-items">
                <img src="../../icons/news.png" alt="news" />
                <span>News Feed</span>
            </Row>
            <Row noGutters="true" className="sidebar-items">
                <img src="../../icons/messenger.png" alt="messenger" />
                <span>Messenger</span>
            </Row>
            <Row noGutters="true" className="sidebar-items">
                <img src="../../icons/game-controller.png" alt="play" />
                <span>Play</span>
            </Row>
            <Row noGutters="true" className="sidebar-items">
                <img src="../../icons/house.png" alt="marketplace" />
                <span>Marketplace</span>
            </Row>
            <div className="category">Expolre</div>
            <Row noGutters="true" className="sidebar-items">
                <img src="../../icons/flag.png" alt="pages" />
                <span>Pages</span>
            </Row>
            <Row noGutters="true" className="sidebar-items">
                <img src="../../icons/calendar.png" alt="events" />
                <span>Events</span>
            </Row>
            <Row noGutters="true" className="sidebar-items">
                <img src="../../icons/film.png" alt="movies" />
                <span>Movies</span>
            </Row>
            <Row noGutters="true" className="sidebar-items">
                <img src="../../icons/passage-of-time.png" alt="memories"/>
                <span>Memories</span>
            </Row>
            <Row noGutters="true" className="sidebar-items">
                <img src="../../icons/sunny.png" alt="weather" />
                <span>Weather</span>
            </Row>
            <Row noGutters="true" className="sidebar-items">
                <img src="../../icons/briefcase.png" alt="jobs" />
                <span>Jobs</span>
            </Row>
            <Row noGutters="true" className="sidebar-items">
                <img src="../../icons/network.png" alt="groups" />
                <span>Groups</span>
            </Row>
        </React.Fragment>

    )
}

export default LeftSidebar
