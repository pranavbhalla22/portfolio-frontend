import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ParticlesBackground from "@/components/ParticlesBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <ParticlesBackground />
      <div className="relative z-10 text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-accent underline hover:text-accent-glow">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
