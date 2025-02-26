import { FC } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { PostGrid } from '../components/PostGrid';
import { Grid, Bookmark, UserSquare2 } from 'lucide-react';
import { PROFILE_DATA } from '../lib/mock-data';

const Profile: FC = () => {
  return (
    <div className="max-w-4xl mx-auto pb-16">
      {/* Profile Header */}
      <div className="px-4 py-8">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={PROFILE_DATA.avatar}
            alt={PROFILE_DATA.username}
            className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover"
          />

          <div className="md:ml-8 mt-4 md:mt-0 text-center md:text-left">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-semibold">{PROFILE_DATA.username}</h1>
              <button className="px-4 py-1.5 bg-secondary text-secondary-foreground rounded-lg text-sm font-semibold">
                Edit Profile
              </button>
            </div>

            <div className="flex gap-8 my-4">
              <div>
                <span className="font-semibold">{PROFILE_DATA.posts}</span>
                {' '}posts
              </div>
              <div>
                <span className="font-semibold">{PROFILE_DATA.followers.toLocaleString()}</span>
                {' '}followers
              </div>
              <div>
                <span className="font-semibold">{PROFILE_DATA.following.toLocaleString()}</span>
                {' '}following
              </div>
            </div>

            <div>
              <h2 className="font-semibold">{PROFILE_DATA.name}</h2>
              <p className="whitespace-pre-line">{PROFILE_DATA.bio}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs and Posts Grid */}
      <Tabs defaultValue="posts" className="w-full">
        <TabsList className="w-full justify-center">
          <TabsTrigger value="posts" className="flex items-center gap-2">
            <Grid className="w-4 h-4" />
            <span className="uppercase text-xs font-semibold">Posts</span>
          </TabsTrigger>
          <TabsTrigger value="saved" className="flex items-center gap-2">
            <Bookmark className="w-4 h-4" />
            <span className="uppercase text-xs font-semibold">Saved</span>
          </TabsTrigger>
          <TabsTrigger value="tagged" className="flex items-center gap-2">
            <UserSquare2 className="w-4 h-4" />
            <span className="uppercase text-xs font-semibold">Tagged</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="posts" className="mt-6">
          <PostGrid posts={PROFILE_DATA.posts_grid} />
        </TabsContent>
        <TabsContent value="saved">
          <div className="text-center py-8 text-muted-foreground">
            No saved posts yet
          </div>
        </TabsContent>
        <TabsContent value="tagged">
          <div className="text-center py-8 text-muted-foreground">
            No tagged posts yet
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;