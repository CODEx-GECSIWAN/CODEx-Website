'use client';

import EventCard from "@/components/events/EventCard";

const events = [
  {
    name: 'Hack the Future 2025',
    date: 'August 20–22, 2025',
    location: 'IIIT BHU, Varanasi',
    description: 'A 48-hour hackathon focused on AI and Web3 innovations.',
    status: 'upcoming',
    link: 'https://hackthefuture.dev',
  },
  {
    name: 'Open Source Sprint',
    date: 'July 12, 2025',
    location: 'Online (Discord)',
    description:
      'A 1-day sprint where contributors fix bugs and submit PRs live!',
    status: 'completed',
  },
  {
    name: 'Intro to GitHub & Git',
    date: 'June 5, 2025',
    location: 'Online',
    description:
      'A beginner-friendly workshop to learn Git basics and start contributing.',
    status: 'completed',
    link: 'https://github.com/codex-club/git-workshop',
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">
        🎉 CODEx Events
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </main>
  );
}
