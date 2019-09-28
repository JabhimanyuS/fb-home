import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './index.scss'

function Post(props) {
    return (
        <React.Fragment>
            <div className="post-wrapper">
                <Row className="author-info" noGutters="true">
                    <Col className="author-image" xs={2} sm={1} md={1}>
                        <img src="../../icons/Abhimanyu.jpg" alt="User" />
                    </Col>
                    <Col className="author-name" xs={8} md={8}>
                        <a href="#">{props.post.author}</a>
                    </Col>
                </Row>
                <Row className="content" noGutters="true">
                    <Col>
                        {props.post.content}
                    </Col>
                </Row>
                <Row className="post-action-items">
                    <Col xs={4}><img src="../icons/like.png" height="15" alt="like" /> Like</Col>
                    <Col xs={4}><img src="../icons/comment.png" height="15" alt="comment" /> Comment</Col>
                    <Col xs={4}> <img src="../icons/share.png" height="15" alt="share" />Share</Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default Post