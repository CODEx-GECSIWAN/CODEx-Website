'use client';

import BlogCard from "@/components/blog/BlogCard";

const blogs = [
  {
    title: 'How We Built the CODEx Platform',
    description: 'A behind-the-scenes look at building our open-source community website.',
    author: 'Ashish Kumar',
    date: 'Aug 1, 2025',
    link: 'https://dev.to/codex/building-codex-platform',
  },
  {
    title: 'Git & GitHub for Beginners',
    description: 'Your first step into open-source starts here!',
    author: 'Rajesh Kumar',
    date: 'July 25, 2025',
    link: 'https://github.com/codex-club/git-guide',
  },
  {
    title: '5 Projects to Crack Hackathons',
    description: 'Ideas, tech stacks, and tips from real hackathon experiences.',
    author: 'Sandeep Kumar',
    date: 'July 15, 2025',
    link: 'https://codex-club.vercel.app/hackathon-guide',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">📝 CODEx Blog</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </main>
  );
}
