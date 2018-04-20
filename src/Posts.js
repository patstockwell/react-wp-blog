import React, { Component } from 'react' 
import axios from 'axios'
import Post from './Post'
import './Post.css'

class Posts extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    axios.get('https://www.wpeka.com/wp-json/wp/v2/posts')
      .then(res => {
        this.setState({
          posts: res.data,
        })
        console.log(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="posts">
        <h1>Here are the posts</h1>
        {this.state.posts.map(post => (
          <Post
            key={post.id}
            post={post}
          />
        ))}
      </div>
    )
  }
}

export default Posts
