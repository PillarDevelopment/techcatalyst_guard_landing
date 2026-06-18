import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import StrictMode from "@/components/StrictMode";
import Deploy from "@/components/Deploy";
import Roles from "@/components/Roles";
import Assurance from "@/components/Assurance";
import Pilot from "@/components/Pilot";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <StrictMode />
        <Deploy />
        <Roles />
        <Assurance />
        <Pilot />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
