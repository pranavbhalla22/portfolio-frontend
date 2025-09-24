import Hero from "../components/Hero";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <section id="about" className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <p>
          Hi, I’m Pranav Bhalla — a software development student passionate about building 
          modern web apps. I enjoy working with Python, Flask, and JavaScript frameworks like 
          React and Next.js. Currently, I’m learning new technologies and looking for 
          opportunities to grow in the software industry.
        </p>
      </section>

      <Skills />   {/* 👈 Add Skills section here */}

      <section id="projects" className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Add project cards here later */}
          <div className="p-6 bg-white rounded-xl shadow">
            Project card placeholder
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            Project card placeholder
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-2xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p>
          Contact form will go here (we’ll connect it to Flask later).
        </p>
      </section>
    </>
  );
}
