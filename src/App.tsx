import { Routes, Route } from "react-router";

import Home from "./Home";
import Login from "./Login";
import Blog from "./blog/Blog";
import ProductsList from "./components/ProductsList";

function App() {
  return (
    <Routes>
      <Route path="/products" element={<ProductsList />} />
      <Route path="/login" element={<Login />} />
      <Route path="blog" element={<Blog />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
