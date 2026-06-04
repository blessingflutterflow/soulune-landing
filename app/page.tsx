import { HeroSection } from "@/components/ui/hero-section-with-smooth-bg-shader";
import AnimatedCardStack from "@/components/ui/animate-card-animation";
import { Component as StackPilot } from "@/components/ui/stack-pilot";

export default function Home() {
  return (
    <>
      <HeroSection distortion={1.2} speed={0.8} />
      <AnimatedCardStack />
      <StackPilot />
    </>
  );
}
