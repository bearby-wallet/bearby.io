import Team from "@/components/About/Team";
import Clients from "@/components/Home/Clients";
import Features from "@/components/Home/Features";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Bearby wallet",
  description: "This is About page for Bearby wallet",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Clients />
    </>
  );
};

export default AboutPage;
