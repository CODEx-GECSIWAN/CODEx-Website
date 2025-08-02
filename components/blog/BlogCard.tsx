'use client';

import React from 'react';

interface BlogCardProps {
  title: string;
  description: string;
  author: string;
  date: string;
  link: string;
}

export default function BlogCard({ title, description, author, date, link }: BlogCardProps) {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-yellow-400 transition shadow-md hover:shadow-yellow-500/20">
      <h2 className="text-2xl font-semibold text-yellow-300 mb-2">{title}</h2>
      <p className="text-gray-300 mb-4">{description}</p>
      <p className="text-sm text-gray-500 mb-2">🖋 {author} | 📅 {date}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-yellow-400 hover:underline"
      >
        🔗 Read More
      </a>
    </div>
  );
}
