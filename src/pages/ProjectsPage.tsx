import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <ParticlesBackground />
      <div className="relative z-10">
        <Navbar />
        <div className="pt-20">
          <Projects />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ProjectsPage;
