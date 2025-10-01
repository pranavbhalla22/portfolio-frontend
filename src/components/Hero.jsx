import Image from "next/image";
import profilePic from "../assets/profile.png"; // or from public/profile.png

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Left Section */}
      <div>
        <h1 className="hero-title">
          Hi, I’m <br />
          <span className="highlight">Pranav Bhalla</span>
        </h1>
        <h2 className="hero-subtitle">Software Developer</h2>
        <p className="hero-description">
          A passionate Software Development student eager to learn,
          build real-world projects, and create impactful applications.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-primary">Contact Me</a>
          <a href="/resume.pdf" className="btn btn-outline">Download Resume</a>
        </div>
      </div>

      {/* Right Section (Profile Image) */}
      <div className="hero-right">
        <div className="profile-ring">
          <Image
            src={profilePic}
            alt="Pranav Bhalla"
            width={250}
            height={250}
            className="profile-img"
          />
        </div>
      </div>
    </section>
  );
}
