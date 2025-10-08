import Navbar from "@/components/Navbar";
import ParticlesBackground from "@/components/ParticlesBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Footer />
    </div>
  );
};

export default Home;