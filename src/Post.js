import React from 'react'
import './Post.css'

const Post = ({ post }) => (
  <div className="post">
    <a href={post.link}><h3>{post.title.rendered}</h3></a>
    <p dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
  </div>
)

export default Post
