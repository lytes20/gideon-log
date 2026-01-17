import "../styles/blog.css";
import Header from "../components/Header";
import { Link } from "react-router";
import { blogs } from "./BlogData";

function Blog() {
  return (
    <div>
      <Header />
      <section>

        <div className="blog-list-container">
          <h1>List of Blogs I have written - Enjoy</h1>
          <ul>
            {blogs.map(({ title, path }) => {
              return (
                <li>
                  <Link to={path}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Blog;
