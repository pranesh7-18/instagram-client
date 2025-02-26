import { Heart, MessageCircle } from 'lucide-react';

interface Post {
  id: number;
  image: string;
  likes: number;
  comments: number;
}

interface PostGridProps {
  posts: Post[];
}

export function PostGrid({ posts }: PostGridProps) {
  return (
    <div className="grid grid-cols-3 gap-0.5 md:gap-4">
      {posts.map((post) => (
        <div key={post.id} className="relative aspect-square group cursor-pointer">
          <img
            src={post.image}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex gap-6 text-white">
              <div className="flex items-center gap-1">
                <Heart className="w-6 h-6 fill-white" />
                <span className="font-semibold">{post.likes}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="w-6 h-6 fill-white" />
                <span className="font-semibold">{post.comments}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}