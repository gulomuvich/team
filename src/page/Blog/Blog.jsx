import "./Blog.css"
import BlogMain from "../../components/BlogMain/BlogMain"
import BlogPodcast from "../../components/BlogPodcast/BlogPodcast";
import Blogcomponets from "../../components/Blogcomponets/Blogcomponets";
import BlogEmail from "../../components/BlogEmail/BlogEmail";
function Blog() {
  return (
    <div>
    <div className="container">
        <h6 className="our-blog_title">Our blog</h6>
      <h2 className="School-title">Createx School Journal</h2>
    </div>
           <BlogMain/>
           <BlogPodcast/>
           <Blogcomponets/>
           <BlogEmail/>
           
    </div>
  )
}

export default Blog;
