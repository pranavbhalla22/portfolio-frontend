import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import profilePlaceholder from "@/assets/profile-placeholder.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Particle Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background">
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-accent rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Hi, I'm <span className="text-accent">Pranav Bhalla</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
              Software Developer
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              A passionate Software Development student eager to learn, build real-world projects, 
              and create impactful applications.
            </p>

            <div className="flex gap-4 pt-4">
              <Button
                variant="default"
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent-glow shadow-glow transition-all duration-300 hover:scale-105"
                onClick={() => navigate('/contact')}
              >
                Contact Me
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105"
              >
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-accent rounded-full blur-3xl opacity-20 animate-glow" />
              <div className="relative w-80 h-80 rounded-full border-4 border-accent overflow-hidden shadow-elegant">
                <img
                  src={profilePlaceholder}
                  alt="Pranav Bhalla"
                  className="w-full h-full object-cover"
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