'use client';

import React from 'react';

interface EventCardProps {
  name: string;
  date: string;
  location: string;
  description: string;
  status: 'upcoming' | 'completed';
  link?: string;
}

export default function EventCard({
  name,
  date,
  location,
  description,
  status,
  link,
}: EventCardProps) {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-yellow-400 transition shadow-md hover:shadow-yellow-500/20">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">{name}</h2>
        <span
          className={`text-sm px-2 py-1 rounded-full ${
            status === 'upcoming'
              ? 'bg-green-700 text-green-300'
              : 'bg-gray-700 text-gray-300'
          }`}
        >
          {status.toUpperCase()}
        </span>
      </div>
      <p className="text-yellow-300 text-sm mb-1">{date}</p>
      <p className="text-gray-400 text-sm mb-3">{location}</p>
      <p className="text-gray-300 mb-4">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 hover:underline"
        >
          🔗 Register / View Details
        </a>
      )}
    </div>
  );
}
