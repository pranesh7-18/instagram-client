export const POSTS = [
    {
      id: 1,
      user: {
        id: 1,
        username: "sara_photography",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
      },
      image: "https://images.unsplash.com/photo-1532295454114-d7bc89024613",
      caption: "Capturing moments 📸 #photography #art",
      likes: 1234,
      comments: 42,
      timestamp: "2h"
    },
    {
      id: 2,
      user: {
        id: 2,
        username: "travel_ben",
        avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5"
      },
      image: "https://images.unsplash.com/photo-1531986362435-16b427eb9c26",
      caption: "Adventure awaits ✈ #travel #explore",
      likes: 892,
      comments: 28,
      timestamp: "4h"
    },
    {
      id: 3,
      user: {
        id: 3,
        username: "creative_soul",
        avatar: "https://images.unsplash.com/photo-1499557354967-2b2d8910bcca"
      },
      image: "https://images.unsplash.com/photo-1595039838779-f3780873afdd",
      caption: "Finding beauty in simplicity 🌿",
      likes: 2156,
      comments: 64,
      timestamp: "6h"
    }
  ];
  
  export const STORIES = [
    {
      id: 1,
      username: "priscilla",
      avatar: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a",
      hasStory: true
    },
    {
      id: 2,
      username: "patrick_m",
      avatar: "https://images.unsplash.com/photo-1469980098053-382eb10ba017",
      hasStory: true
    },
    {
      id: 3,
      username: "austin.n",
      avatar: "https://images.unsplash.com/photo-1479231233972-e184fe70398e",
      hasStory: true
    },
    {
      id: 4,
      username: "joel_f",
      avatar: "https://images.unsplash.com/photo-1515446134809-993c501ca304",
      hasStory: false
    }
  ];
  
  export const EXPLORE_POSTS = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1523474438810-b04a2480633c",
      likes: 5678,
      comments: 123
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1611001897293-561e0c30f938",
      likes: 4321,
      comments: 98
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920",
      likes: 7890,
      comments: 234
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1547032175-7fc8c7bd15b3",
      likes: 3456,
      comments: 87
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1528870884180-5649b20f6435",
      likes: 6543,
      comments: 165
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1499728603263-13726abce5fd",
      likes: 4567,
      comments: 143
    }
  ];
  
  export const PROFILE_DATA = {
    username: "sara_photography",
    name: "Sara Wilson",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    posts: 245,
    followers: 12400,
    following: 890,
    bio: "Photography is poetry for the eyes ✨\nTravel enthusiast 🌎\nBased in NYC 🗽",
    posts_grid: EXPLORE_POSTS
  };
  