import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BottomScrollListener from 'react-bottom-scroll-listener';

import Header from '../../components/Header'
import HamMenu from '../../components/HamburgerMenu'
import LeftSidebar from '../../components/Sidebar/LeftSidebar'
import Post from '../../components/Post'
import RightSidebar from '../../components/Sidebar/RightSidebar'
import posts from '../../components/Post/content'
import requests from '../../components/Sidebar/RightSidebar/content'


import './index.scss'

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: posts.slice(0, 10),
      from: 0,
      to: 10,
      loadingPosts: false,
      activateMenu: false
    }
  }

  // Fetch next posts
  // Append to existing posts list
  fetchMorePosts = () => {
    // This will be flag from api in real world scenario which tells there are no further posts
    if(this.state.posts.length === 45) {
      return
    }
    this.setState({
      loadingPosts: true,
      from: this.state.from + 10,
      to: this.state.to + 10
    }, () => {
      const newPosts = posts.slice(this.state.from, this.state.to)
      // Mimic an api call
      setTimeout(() => {
        this.setState({
          posts: [...this.state.posts, ...newPosts],
          loadingPosts: false
        })
      },2000)
    })
  }

  // Toggle hamburger menu
  activateMenu = () => {
    this.setState({
      activateMenu: !this.state.activateMenu
    })
  }

  render() {
    const { posts, loadingPosts, activateMenu } = this.state
    const postList = posts.map((post, index) => {
      return (
        <Post post={post} key={index} />
      )
    })
    return (
      <React.Fragment>
        <BottomScrollListener onBottom={this.fetchMorePosts} />
        <Row noGutters="true">
          <Header activateMenu={this.activateMenu} />
        </Row>
        <Row noGutters="true" className="sections">
          <Col md={3} className="sidebar left">
            <div className="left-sidebar-wrapper">
              <LeftSidebar />
            </div>
          </Col>
          <Col md={6} className="posts-container">
            {postList}
            <div className={`loader ${loadingPosts ? 'is-loading' : null}`}>
              <h2>Loading Posts...</h2>
            </div>
          </Col>
          <Col md={3} className="sidebar right">
            <div className="right-sidebar-wrapper">
              <RightSidebar requests={requests} />
            </div>
          </Col>
          { activateMenu ? <HamMenu /> : null }
        </Row>
      </React.Fragment>
    )
  }
}

export default HomePage;
