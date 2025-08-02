'use client';

import ResourceCard from "@/components/resources/ResourceCard";

const resources = [
  {
    title: 'Striver’s DSA Sheet',
    description: 'A comprehensive DSA practice sheet with 180 problems.',
    link: 'https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/',
    category: 'DSA',
  },
  {
    title: 'JavaScript Info',
    description: 'Deep dive into JavaScript fundamentals and advanced topics.',
    link: 'https://javascript.info/',
    category: 'Web Development',
  },
  {
    title: 'CS50: Harvard’s Intro to Computer Science',
    description: 'A free, beginner-friendly full CS course by Harvard.',
    link: 'https://cs50.harvard.edu/',
    category: 'Computer Science',
  },
  {
    title: 'FastAI ML Course',
    description: 'Practical deep learning for coders by FastAI.',
    link: 'https://course.fast.ai/',
    category: 'Machine Learning',
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">
        📚 CODEx Learning Resources
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((res, index) => (
          <ResourceCard key={index} {...res} />
        ))}
      </div>
    </main>
  );
}
