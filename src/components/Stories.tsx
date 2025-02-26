import { type FC } from 'react';
import { ScrollArea } from '../components/ui/scroll-area';
import { STORIES } from '../lib/mock-data';

export const Stories: FC = () => {
  return (
    <ScrollArea className="w-full">
      <div className="flex gap-4 px-4 py-4">
        {STORIES.map((story) => (
          <div key={story.id} className="flex flex-col items-center gap-1">
            <div
              className={`w-16 h-16 rounded-full p-[3px] ${
                story.hasStory
                  ? 'bg-gradient-to-tr from-yellow-400 to-pink-600'
                  : 'bg-gray-200'
              }`}
            >
              <img
                src={story.avatar}
                alt={story.username}
                className="w-full h-full rounded-full border-2 border-white object-cover"
              />
            </div>
            <span className="text-xs truncate w-16 text-center">
              {story.username}
            </span>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};