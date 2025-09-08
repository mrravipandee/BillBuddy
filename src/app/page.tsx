import About from "@/components/About";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Process from "@/components/Process";

export default function Home() {
  return (
      <div>
        <Hero />
        <About />
        <Features />
        <Process />
        <Contact />
        <Footer />
      </div>

  );
}
