// Write your JS code here

import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogData
  return (
    <li className="list-container">
      <Link to={`/blogs/${id}`} className="item-link">
        <div className="item-container">
          <img src={imageUrl} alt={`items{id}`} className="blog-img" />
          <div className="blog-info">
            <p className="blog-topic">{topic}</p>
            <h1 className="blog-title">{title}</h1>
            <div className="blog-author-details">
              <img src={avatarUrl} alt={`avatar${id}`} className="avatar-img" />
              <p className="author">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
