'use client';

import FAQItem from "@/components/faq/FAQItem";

const faqs = [
  {
    question: '💻 How can I contribute to CODEx?',
    answer: 'Fork our repo, make your changes, and submit a pull request on GitHub. Start with good-first issues!',
  },
  {
    question: '🧠 Do I need experience to join?',
    answer: 'No, we welcome complete beginners. We’ll help you learn through projects, sessions, and mentorship.',
  },
  {
    question: '🛠️ What tech stack does CODEx use?',
    answer: 'Mainly MERN Stack (MongoDB, Express, React/Next.js, Node.js), TailwindCSS, and GitHub for version control.',
  },
  {
    question: '📅 When are weekly meetings held?',
    answer: 'Every Friday at 7PM IST via Discord. Join to collaborate, learn, and ask questions.',
  },
  {
    question: '💬 How do I join the Discord server?',
    answer: 'Use the invite link provided on our homepage or contact any team member to get access.',
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">❓ Frequently Asked Questions</h1>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </div>
    </main>
  );
}
