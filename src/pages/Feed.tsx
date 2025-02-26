import { useEffect, useState } from 'react';
import { Stories } from '../components/Stories';
import { Post } from '../components/Post';
import { PostSkeleton } from '../components/PostSkeleton';
import { POSTS } from '../lib/mock-data';

export default function Feed() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-xl mx-auto pb-16 md:pt-6">
      <Stories />
      
      <div className="mt-4">
        {loading ? (
          <>
            <PostSkeleton />
            <PostSkeleton />
          </>
        ) : (
          POSTS.map((post) => (
            <Post key={post.id} {...post} />
          ))
        )}
      </div>
    </div>
  );
}