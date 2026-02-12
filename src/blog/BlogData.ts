import Cache from "./blogs/cache.mdx";
import Lessons from "./blogs/lessons.mdx";
import CreatingReactApp from "./blogs/creating-a-react-app.mdx";
import FetchingData from "./blogs/fetch.mdx";
import Web from "./blogs/web.mdx";
import Markdown from "./blogs/markdown.mdx";

interface blogProps {
  title: string;
  path: string;
  component: React.ComponentType;
}
export const blogs: blogProps[] = [
  {
    title: "Markdown",
    path: "/markdown",
    component: Markdown,
  },
  {
    title: "How the web works",
    path: "/web",
    component: Web,
  },
  {
    title: "Fetching Data in React",
    path: "/fetch-data-react",
    component: FetchingData,
  },
  {
    title: "Creating a React App",
    path: "/creating-a-react-app",
    component: CreatingReactApp,
  },
  { title: "Caching", path: "/caching", component: Cache },
  {
    title: "Some Lessons (With some anime inspiration)",
    path: "/lessons",
    component: Lessons,
  },
];
