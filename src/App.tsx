import { FC } from 'react';
import { Route } from 'wouter';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import Navbar from './components/Navbar';
import Feed from './pages/Feed';
import Explore from './pages/Explore';
import Profile from './pages/Profile';

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-16">
          <Route path="/" component={Feed} />
          <Route path="/explore" component={Explore} />
          <Route path="/profile/:username" component={Profile} />
        </main>
      </div>
    </QueryClientProvider>
  );
};

export default App;