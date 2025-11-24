import Cache from "./blogs/cache.mdx";
import Iteration from "./blogs/iteration.mdx";
import RemoteWork from "./blogs/remote-work.mdx";
import Training from "./blogs/training.mdx";

interface blogProps {
  title: string;
  path: string;
  component: React.ComponentType;
}
export const blogs: blogProps[] = [
  { title: "Caching", path: "/caching", component: Cache },
  { title: "Iteration", path: "/iteration", component: Iteration },
  { title: "Remote Work", path: "/remote-work", component: RemoteWork },
  {
    title: "Lessons From Anime",
    path: "/lessons-from-anime",
    component: Training,
  },
];
