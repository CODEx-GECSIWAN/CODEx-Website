// pages/team.tsx
import React, { useEffect, useRef } from "react";
import Head from "next/head";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

// Only register ScrollTrigger on client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
    linkedin: "https://www.linkedin.com/in/ashish-gupta",
    instagram: "https://www.instagram.com/virat_fan_forever_0217",
  },
  {
    name: "Sandeep Kumar",
    role: "Technical Head",
    photo: "/image/sandeep.jpeg",
    github: "https://github.com/sandeep",
    linkedin: "https://linkedin.com/in/sandeep",
    instagram: "https://instagram.com/sandeep",
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
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    instagram: "https://instagram.com/",
  },
  {
    name: "Sachin Kumar",
    role: "Design & Media Lead",
    photo: "/image/sachin.jpeg",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    instagram: "https://instagram.com/",
  },
];

const Team = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const createStars = () => {
      const container = document.querySelector('.stars-container');
      if (!container) return;

      container.innerHTML = '';
      for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 3;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        const duration = 3 + Math.random() * 7;
        star.style.animation = `twinkle ${duration}s infinite alternate`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(star);
      }
    };

    createStars();
    window.addEventListener('resize', createStars);

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          opacity: 0,
          y: 100,
          duration: 0.8,
          delay: i * 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });

        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -10,
            duration: 0.3,
            ease: "power2.out",
          });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

      gsap.to(".floating-element", {
        y: 20,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => {
      window.removeEventListener('resize', createStars);
      ctx.revert();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Meet Our Team</title>
        <style>{`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }

          @keyframes twinkle {
            0% { opacity: 0.2; }
            100% { opacity: 1; }
          }

          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }

          .star {
            position: absolute;
            background-color: white;
            border-radius: 50%;
            pointer-events: none;
          }

          .gradient-border {
            position: relative;
            border-radius: 1rem;
            transform-style: preserve-3d;
            perspective: 1000px;
          }

          .gradient-border::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            z-index: -1;
            background: linear-gradient(45deg, #ff00cc, #3333ff, #00ccff);
            background-size: 200% 200%;
            border-radius: 1rem;
            animation: gradient 8s ease infinite, pulse 4s ease infinite;
            opacity: 0.8;
            transition: opacity 0.3s ease;
          }

          .gradient-border:hover::before {
            opacity: 1;
          }

          .social-icon {
            transition: all 0.3s ease;
            transform: translateZ(0);
          }

          .social-icon:hover {
            transform: translateY(-5px) scale(1.1);
            filter: drop-shadow(0 5px 10px rgba(255, 255, 255, 0.3));
          }

          body {
            overflow-x: hidden;
          }
        `}</style>
      </Head>

      <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-black text-white px-4 sm:px-6">
        <div className="stars-container fixed inset-0 z-0"></div>

        <div className="floating-element absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 blur-xl"></div>
        <div className="floating-element absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-pink-500 to-red-500 opacity-15 blur-xl"></div>
        <div className="floating-element absolute bottom-1/4 left-1/3 w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 blur-xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 mt-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
          >
            Meet the Crew
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 px-2 sm:px-4">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                ref={(el) => (cardsRef.current[idx] = el)}
                className="gradient-border group relative transform transition-all duration-500 hover:z-10"
              >
                <div className="bg-gray-900 p-6 sm:p-8 rounded-xl h-full flex flex-col items-center backdrop-blur-sm bg-opacity-80">
                  <div className="relative mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-white shadow-lg relative z-10"
                    />
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 text-center">
                    {member.name}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-300 mb-6 text-center">
                    {member.role}
                  </p>

                  <div className="flex gap-4 sm:gap-5 mt-auto">
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noreferrer"
                      className="social-icon"
                    >
                      <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                        <img
                          src="/icons/github.svg"
                          className="h-4 sm:h-5 invert"
                          alt="GitHub"
                        />
                      </div>
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="social-icon"
                    >
                      <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600">
                        <img
                          src="/icons/linkedin.svg"
                          className="h-4 sm:h-5 invert"
                          alt="LinkedIn"
                        />
                      </div>
                    </a>
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="social-icon"
                    >
                      <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r from-purple-600 to-pink-600">
                        <img
                          src="/icons/instagram.svg"
                          className="h-4 sm:h-5 invert"
                          alt="Instagram"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
