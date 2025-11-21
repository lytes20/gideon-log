import { Outlet } from "react-router";
import Header from "../components/Header";

function Blog() {
  return (
    <div>
      <Header />
      <section>
        <div className="blog-container">
          <Outlet />
        </div>
      </section>
    </div>
  );
}

export default Blog;
