import Cache from "./blogs/cache.mdx";
import RemoteWork from "./blogs/remote-work.mdx";
import Lessons from "./blogs/lessons.mdx";
import CreatingReactApp from "./blogs/creating-a-react-app.mdx";
import FetchingData from "./blogs/fetch.mdx";

interface blogProps {
  title: string;
  path: string;
  component: React.ComponentType;
}
export const blogs: blogProps[] = [
  {
    title: "Fetching Data ",
    path: "/fetch-data-react",
    component: FetchingData,
  },
  {
    title: "Creating a Rect App",
    path: "/creating-a-react-app",
    component: CreatingReactApp,
  },
  { title: "Caching", path: "/caching", component: Cache },
  { title: "Remote Work", path: "/remote-work", component: RemoteWork },
  {
    title: "Some Lessons (With some anime inspiration)",
    path: "/lessons",
    component: Lessons,
  },
];
