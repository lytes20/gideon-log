import { Routes, Route } from 'react-router';

import Home from './pages/Home';
import Blog from './blog';
import BlogLayout from './blog/BlogLayout';
import ProductsList from './components/ProductsList';
import { blogs } from './blog/BlogData';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import ImageGenerator from './Apps/ImageGenerator';
import MarkdownPost from './Apps/ImageGenerator/MarkdownPost';
import NextJSAdapter from './Apps/ImageGenerator/NextJSAdapter';

function App() {
  return (
    <Routes>
      <Route path="/products" element={<ProductsList />} />

      <Route path="/" element={<Home />} />
      <Route path="experience" element={<Experience />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contact" element={<Contact />} />
      <Route path="image-generator" element={<ImageGenerator />} />
      <Route path="image-generator/markdown-post" element={<MarkdownPost />} />
      <Route path="image-generator/nextjs-adapter" element={<NextJSAdapter />} />

      {/* Blog routes */}
      <Route element={<BlogLayout />}>
        {blogs.map(({ path, component: Component }) => {
          return <Route key={path} path={path} element={<Component />} />;
        })}
      </Route>
    </Routes>
  );
}

export default App;
