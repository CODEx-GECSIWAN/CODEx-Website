'use client';

import React from 'react';

interface ResourceCardProps {
  title: string;
  description: string;
  link: string;
  category: string;
}

export default function ResourceCard({ title, description, link, category }: ResourceCardProps) {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-yellow-400 transition shadow-md hover:shadow-yellow-500/20">
      <p className="text-sm text-yellow-300 mb-2">{category}</p>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-300 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-yellow-400 hover:underline"
      >
        🔗 Visit Resource
      </a>
    </div>
  );
}
