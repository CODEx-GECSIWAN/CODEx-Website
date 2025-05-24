import React from "react";

const About = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-24">
        
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">About Us</h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300">
            We are a passionate community committed to innovation, learning, and impact.
            Our mission is to equip individuals with the skills to turn ideas into real-world digital solutions.
            Through collaboration, creativity, and cutting-edge technology, we empower the next generation of thinkers and builders.
          </p>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">Why Join Us</h2>
          <ul className="space-y-4 text-lg text-gray-300 list-disc list-inside">
            <li>🌟 Collaborate with a supportive and driven team of creators.</li>
            <li>📚 Gain access to workshops, mentorships, and resources to boost your growth.</li>
            <li>🛠 Work on real-world projects that matter and make an impact.</li>
            <li>🧘‍♂️ Enjoy flexibility, remote-friendly culture, and work-life balance.</li>
            <li>🚀 Be part of a movement that values your voice, skills, and vision.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
