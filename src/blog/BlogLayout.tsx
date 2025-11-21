import { Outlet } from "react-router";
import Header from "../components/Header";
import Signature from "./components/signature.mdx";

function Blog() {
  return (
    <div>
      <Header />
      <section>
        <div className="blog-container">
          <Outlet />
          <Signature />
        </div>
      </section>
    </div>
  );
}

export default Blog;
