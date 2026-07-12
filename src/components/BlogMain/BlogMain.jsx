import { Link } from "react-router-dom";
import "./BlogMain.css";
import { IoSearch } from "react-icons/io5";

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
        <li className="Blog-main_search">
          <label htmlFor="eventECategory">
            Event category
            <select id="eventECategory">
              <option>all themes</option>
            </select>
          </label>
          <label style={{ position: "relative" }}>
            <input
              placeholder="Search event..."
              className="searchInput"
              type="text"
            />
            <IoSearch className="iSearchIcon" />
          </label>
        </li>
      </ul>
    </div>
  );
}

export default BlogMain;
