import { PostGrid } from '../components/PostGrid';
import { EXPLORE_POSTS } from '../lib/mock-data';

export default function Explore() {
  return (
    <div className="container max-w-6xl mx-auto pb-16 pt-4">
      <PostGrid posts={EXPLORE_POSTS} />
    </div>
  );
}