import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import LLMFirewall from "@/components/LLMFirewall";
import Features from "@/components/Features";
import StrictMode from "@/components/StrictMode";
import Deploy from "@/components/Deploy";
import Roles from "@/components/Roles";
import Clients from "@/components/Clients";
import Team from "@/components/Team";
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
        <HowItWorks />
        <Features />
        <Problem />
        <LLMFirewall />
        <StrictMode />
        <Deploy />
        <Roles />
        <Clients />
        <Team />
        <Assurance />
        <Pilot />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
