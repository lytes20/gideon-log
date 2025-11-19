import Cache from "./cache.mdx";
import "../styles/blog.css";
import Header from "../components/Header";
function Blog() {
  return (
    <div>
      <Header />
      <section>
        <div className="blog-container">
          <Cache />
        </div>
      </section>
    </div>
  );
}

export default Blog;
