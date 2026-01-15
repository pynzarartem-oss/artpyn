import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Experience } from "@/app/components/Experience";
import { Portfolio } from "@/app/components/Portfolio";
import { Achievements } from "@/app/components/Achievements";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Portfolio />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}