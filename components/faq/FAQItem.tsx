'use client';

import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border border-gray-700 bg-gray-900 rounded-xl p-4 mb-4 cursor-pointer hover:border-yellow-400 transition"
      onClick={() => setOpen(!open)}
    >
      <h3 className="text-lg font-semibold text-yellow-300">{question}</h3>
      {open && <p className="text-gray-300 mt-2">{answer}</p>}
    </div>
  );
}
