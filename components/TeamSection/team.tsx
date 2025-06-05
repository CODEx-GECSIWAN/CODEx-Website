'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const teamMembers = [
  {
    name: "Vikash Kumar",
    role: "President",
    photo: "/image/vikash.jpeg",
    github: "https://github.com/vikashkrdeveloper",
    linkedin: "https://www.linkedin.com/in/vikashkrdeveloper",
    instagram: "https://www.instagram.com/vikashkrdeveloper",
  },
  {
    name: "Ashish Kumar",
    role: "Vice President",
    photo: "/image/ashish.jpg",
    github: "https://github.com/DevloperAshish17",
    linkedin: "https://www.linkedin.com/in/developerashish17",
    instagram: "https://www.instagram.com/virat_fan_forever_0217",
  },
  {
    name: "Sandeep Kumar",
    role: "Technical Head",
    photo: "/image/sandeep.jpeg",
    github: "https://github.com/sandeepkumar23f/",
    linkedin: "https://www.linkedin.com/in/sandeep-kumar-b9674829a/",
    instagram: "https://www.instagram.com/",
  },
  {
    name: "Prayag Sagar",
    role: "Events & Outreach Head",
    photo: "/image/prayag.jpeg",
    github: "https://github.com/sandeep",
    linkedin: "https://linkedin.com/in/sandeep",
    instagram: "https://instagram.com/sandeep",
  },
  {
    name: "Rajesh Kumar",
    role: "Content & Social Media Lead",
    photo: "/image/rajesh.jpg",
    github: "https://github.com/Rajeshkumarbaitha",
    linkedin: "https://www.linkedin.com/in/rajesh-kumar-baitha-4aa5672ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/_rajak.rajesh.09.?utm_source=qr&igsh=azZzb2Z0azljMjY3",
  },
  {
    name: "Sachin Kumar",
    role: "Design & Media Lead",
    photo: "/image/sachin.jpeg",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    instagram: "https://instagram.com/",
  },
  {
    name: "Ayush Kumar",
    role: "Media & Publicity Lead",
    photo: "/image/Ayush.jpg",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    instagram: "https://instagram.com/",
  },
  {
    name: "Deepak Sharma",
    role: "Community & Collaboration Lead",
    photo: "/image/Deepak.jpg",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/in/deepak-kumar-prasad-8660872aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://instagram.com/",
  },
  {
    name: "Rohit Kumar",
    role: "Documentation & Resource Manager",
    photo: "/image/Rohit.jpg",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    instagram: "https://instagram.com/",
  },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f0f0f] to-[#0b0e1a] text-white relative overflow-hidden">
      {/* Optional Star Background Overlay */}
      <div className="absolute inset-0 bg-[url('/stars.svg')] bg-cover bg-center opacity-10 z-0" />

      {/* Team Section */}
      <section className="relative z-10 px-6 py-12 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pink-500">
          Meet the Crew
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 bg-opacity-80 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-transform"
            >
              <div className="w-[150px] h-[150px] relative mx-auto">
                <Image
                  src={member.photo}
                  alt={`${member.name} photo`}
                  fill
                  className="rounded-full object-cover border-4 border-yellow-400"
                />
              </div>
              <h3 className="text-xl font-semibold text-center mt-4">{member.name}</h3>
              <p className="text-center text-yellow-400">{member.role}</p>
              <div className="flex justify-center gap-4 sm:gap-5 mt-4">
                <a href={member.github} target="_blank" rel="noreferrer">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                    <Image src="/icons/github.svg" alt="GitHub" width={20} height={20} className="invert" />
                  </div>
                </a>
                <a href={member.linkedin} target="_blank" rel="noreferrer">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600">
                    <Image src="/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} className="invert" />
                  </div>
                </a>
                <a href={member.instagram} target="_blank" rel="noreferrer">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r from-purple-600 to-pink-600">
                    <Image src="/icons/instagram.svg" alt="Instagram" width={20} height={20} className="invert" />
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
