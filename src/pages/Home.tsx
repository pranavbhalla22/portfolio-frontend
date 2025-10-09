import Navbar from "@/components/Navbar";
import ParticlesBackground from "@/components/ParticlesBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <ParticlesBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Footer />
      </div>
    </div>
  );
};

export default Home;