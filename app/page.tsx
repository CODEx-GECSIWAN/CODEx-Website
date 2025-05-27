import Hero from "../components/LandingPage/hero";
import About from "../components/LandingPage/about";
import { ShootingStars } from "../components/ui/shooting-stars";
import { StarsBackground } from "../components/ui/stars-backgrond";
export default function Home() {
  return (
    <>
    <ShootingStars/>
    <StarsBackground/>
    <Hero/>
    <About/>
    </>
  );
}
