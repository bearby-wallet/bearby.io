import Team from "@/components/About/Team";
import Features from "@/components/Home/Features";
import FeaturesList from "@/components/Home/FeaturesList";
import Hero from "@/components/Home/Hero";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bearby wallet",
  description: "This is Home for Bearby wallet",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesList />
      <Pricing />
      <Team />
    </>
  );
}
