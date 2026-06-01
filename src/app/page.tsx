import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import ServiceTeaser from "@/components/ServiceTeaser";
import FeaturedWork from "@/components/FeaturedWork";
import Statement from "@/components/Statement";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Intro />
      <ServiceTeaser />
      <FeaturedWork />
      <Statement />
      <Footer />
      <BackToTop />
    </main>
  );
}
