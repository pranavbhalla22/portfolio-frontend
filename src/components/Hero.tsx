import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import profilePlaceholder from "@/assets/profile-placeholder.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 md:px-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Section */}
          <div className="flex-1 text-center md:text-left animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
              Hi, I'm <br />
              <span className="text-accent">Pranav Bhalla</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Software Developer
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-8">
              A passionate Software Development student eager to learn,
              build real-world projects, and create impactful applications.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent-glow transition-all duration-300"
                onClick={() => navigate('/projects')}
              >
                View Projects
              </Button>
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent-glow transition-all duration-300"
                onClick={() => navigate('/contact')}
              >
                Contact Me
              </Button>
<a
  href="/resume.pdf"
  download="Pranav_Bhalla_Resume.pdf"
  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold"
>
  Download Resume
</a>
</div>
</div>


          {/* Right Section - Profile Image */}
          <div className="flex-1 flex justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-accent p-2 animate-glow">
                <img
                  src={profilePlaceholder}
                  alt="Pranav Bhalla"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
