import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <ParticlesBackground />
      <div className="relative z-10">
        <Navbar />
        <div className="pt-20">
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;