import { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDoubleTap } from '../hooks/use-double-tap';

interface PostProps {
  id: number;
  user: {
    username: string;
    avatar: string;
  };
  image: string;
  caption: string;
  likes: number;
  comments: number;
  timestamp: string;
}

export function Post({
  user,
  image,
  caption,
  likes,
  comments,
  timestamp,
}: PostProps) {
  const [liked, setLiked] = useState(false);
  const [showHeart, setShowHeart] = useState(false);

  const handleDoubleTap = () => {
    if (!liked) {
      setLiked(true);
      setShowHeart(true);
      setTimeout(() => setShowHeart(false), 1000);
    }
  };

  const handleTap = useDoubleTap(handleDoubleTap);

  return (
    <div className="border-b border-border pb-4 mb-4">
      <div className="flex items-center px-4 py-2">
        <img
          src={user.avatar}
          alt={user.username}
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="ml-3 font-medium">{user.username}</span>
      </div>

      <div className="relative" onClick={handleTap}>
        <img
          src={image}
          alt="Post"
          className="w-full aspect-square object-cover"
        />
        <AnimatePresence>
          {showHeart && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Heart
                className="w-24 h-24 text-white drop-shadow-lg"
                fill="white"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="px-4 pt-4">
        <div className="flex justify-between mb-4">
          <div className="flex space-x-4">
            <button
              onClick={() => setLiked(!liked)}
              className="hover:opacity-60 transition"
            >
              <Heart
                className={`w-6 h-6 ${liked ? 'text-red-500 fill-red-500' : ''}`}
              />
            </button>
            <button className="hover:opacity-60 transition">
              <MessageCircle className="w-6 h-6" />
            </button>
            <button className="hover:opacity-60 transition">
              <Send className="w-6 h-6" />
            </button>
          </div>
          <button className="hover:opacity-60 transition">
            <Bookmark className="w-6 h-6" />
          </button>
        </div>

        <div className="font-medium mb-2">{likes.toLocaleString()} likes</div>

        <div className="space-y-2">
          <div>
            <span className="font-medium mr-2">{user.username}</span>
            {caption}
          </div>
          {comments > 0 && (
            <button className="text-muted-foreground text-sm">
              View all {comments} comments
            </button>
          )}
          <div className="text-xs text-muted-foreground uppercase">
            {timestamp}
          </div>
        </div>
      </div>
    </div>
  );
}