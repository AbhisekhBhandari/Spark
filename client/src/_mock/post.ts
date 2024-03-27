interface Post {
  userId: string;
  username: string;
  email: string;
  followed: boolean;
  caption?: string;
  photo?: string;
  postId: string;
  liked: boolean;
}

export const POST_MOCK: Post[] = [
  {
    userId: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p",
    username: "john_doe",
    email: "john.doe@example.com",
    followed: true,
    caption: "Exploring new horizons 🌅",
    photo: "",
    postId: "5q6r7s8t-9u0v-1w2x-3y4z-5A6B7C8D9E0F",
    liked: true,
  },
  {
    userId: "a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p",
    username: "jane_smith",
    email: "jane.smith@example.com",
    followed: false,
    caption: "Chasing dreams ✨",
    photo:
      "https://c4.wallpaperflare.com/wallpaper/142/751/831/landscape-anime-digital-art-fantasy-art-wallpaper-preview.jpg",
    postId: "q1w2e3r4-t5y6u7i8-o9p0-a1s2d3f4g5h",
    liked: true,
  },
  {
    userId: "z1x2c3v4-b5n6m7-q8w9e0-r1t2y3u4i5o",
    username: "alex_wilson",
    email: "alex.wilson@example.com",
    followed: true,
    caption: "Enjoying the little things in life",
    photo:
      "https://c4.wallpaperflare.com/wallpaper/663/947/813/oldboy-japanese-digital-art-artwork-wallpaper-preview.jpg",
    postId: "5t6y7u8i-9o0p1a2-s3d4f5g6-h7j8k9l0z1x",
    liked: true,
  },
  {
    userId: "a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p",
    username: "jane_smith",
    email: "jane.smith@example.com",
    followed: false,
    caption: "Adventures await! 🌄",
    photo: "",
    postId: "5a6b7c8d-9e0f-1g2h-3i4j-5k6l7m8n9o0p",
    liked: true,
  },
  {
    userId: "z1x2c3v4-b5n6m7-q8w9e0-r1t2y3u4i5o",
    username: "alex_wilson",
    email: "alex.wilson@example.com",
    followed: true,
    caption: "A cup of coffee and a good book ☕📚",
    photo: "https://c4.wallpaperflare.com/wallpaper/757/911/790/women-anime-girls-brunette-cat-wallpaper-preview.jpg",
    postId: "1q2w3e4r-5t6y7u8i-9o0p1a2-s3d4f5g6h7j",
    liked: true,
  },
  {
    userId: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p",
    username: "john_doe",
    email: "john.doe@example.com",
    followed: true,
    caption: "Weekend vibes! 🎉",
    photo: "",
    postId: "8d9e0f1g-2h3i4j5k-6l7m8n9o-0p1q2r3s4t5u",
    liked: true,
  },
  {
    userId: "z1x2c3v4-b5n6m7-q8w9e0-r1t2y3u4i5o",
    username: "alex_wilson",
    email: "alex.wilson@example.com",
    followed: true,
    caption: "Nature's beauty never fails to mesmerize 🌿",
    photo: "",
    postId: "6h7j8k9l-0z1x2c3v-4b5n6m7q-8w9e0r1t2y",
    liked: false,
  },
  {
    userId: "a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p",
    username: "jane_smith",
    email: "jane.smith@example.com",
    followed: false,
    caption: "Dare to dream big! ✨",
    photo: "https://c4.wallpaperflare.com/wallpaper/760/459/710/aoi-ogata-anime-girls-wallpaper-preview.jpg",
    postId: "3u4i5o6p-7a8s9d0f-1g2h3j4k-5l6m7n8b9v",
    liked: true,
  },
  {
    userId: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p",
    username: "john_doe",
    email: "john.doe@example.com",
    followed: true,
    caption: "Embracing the journey, one step at a time 👣",
    photo: "",
    postId: "0q1w2e3r-4t5y6u7i-8o9p0a1s-2d3f4g5h6j",
    liked: false,
  },
  {
    userId: "z1x2c3v4-b5n6m7-q8w9e0-r1t2y3u4i5o",
    username: "alex_wilson",
    email: "alex.wilson@example.com",
    followed: true,
    caption: "Sunsets are proof that endings can be beautiful too 🌇",
    photo: "https://c4.wallpaperflare.com/wallpaper/410/558/539/anime-anime-girls-underboob-liang-xing-wallpaper-preview.jpg",
    postId: "7k8l9z1x-2c3v4b5n-6m7q8w9e-0r1t2y3u4i",
    liked: false,
  },
];
