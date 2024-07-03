// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: [], isLoading: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    // console.log(match)
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)
    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
    }
    this.setState({blogData: updatedData, isLoading: false})
  }

  renderBlogItemdetails = () => {
    const {blogData} = this.state
    const {id, title, imageUrl, avatarUrl, author, content} = blogData
    return (
      <div className="blog-info">
        <h1 className="blog-title">{title}</h1>
        <div className="author-details">
          <img className="author-img" src={avatarUrl} alt={author} />
          <p className="author-name">{author}</p>
        </div>
        <img className="blog-item-img" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="blog-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#0BBFFF" height={50} weight={50} />
          </div>
        ) : (
          this.renderBlogItemdetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
