import { Link } from "react-router-dom"
import "./BlogMain.css"


function BlogMain() {
  return (
    <div className="container">
      <ul className="blog-all">
        <li>
            <Link className="blog-main">All</Link>
            <Link className="blog-main">Articles</Link>
            <Link className="blog-main">Videos</Link>
            <Link className="blog-main">Podcasts</Link>
        </li>
        <li>
          
        </li>
      </ul>
    </div>
  )
}

export default BlogMain
