import React from 'react';
import Hero from '@/components/LandingPage/hero';
import About from '@/components/LandingPage/about';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-backgrond';
import TeamSection from '@/components/TeamSection/team';
import OpenSourcePage from '@/components/openSourcePage/openSource';
import RegistrationPage from '@/components/EventRegistration/RegistrationPage';
import CodeOfConduct from '@/components/codeOfConduct/code-of-conduct';
import LeaderboardPage from '@/components/leaderboard/page';
import { FloatingDockDemo } from '@/components/Header';

export default function Home() {
  return (
    <>
      <FloatingDockDemo />
      <ShootingStars />
      <StarsBackground />
      <Hero />
      <About />
      <TeamSection />
      <OpenSourcePage />
      <RegistrationPage />
      <CodeOfConduct />
      <LeaderboardPage />
    </>
  );
}
