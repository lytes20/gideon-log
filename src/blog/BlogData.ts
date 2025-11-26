import Cache from "./blogs/cache.mdx";
import RemoteWork from "./blogs/remote-work.mdx";
import Lessons from "./blogs/lessons.mdx";

interface blogProps {
  title: string;
  path: string;
  component: React.ComponentType;
}
export const blogs: blogProps[] = [
  { title: "Caching", path: "/caching", component: Cache },
  { title: "Remote Work", path: "/remote-work", component: RemoteWork },
  {
    title: "Lessons",
    path: "/lessons",
    component: Lessons,
  },
];
