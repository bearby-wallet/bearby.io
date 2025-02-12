import Features from "@/components/Home/Features";
import FeaturesList from "@/components/Home/FeaturesList";
import Hero from "@/components/Home/Hero";
import Reviews from "@/components/Home/Reviews";
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
      <section className="relative z-20 overflow-hidden pb-20 pt-22.5 lg:pt-27.5 xl:pt-32.5 2xl:pt-45">
        <Reviews />
      </section>
    </>
  );
}
