export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 flex flex-col justify-center items-center text-center text-white pt-20 px-6">
      <h1 className="text-5xl md:text-6xl font-extrabold animate-fadeIn">
        Hi, I’m <span className="text-yellow-300">Pranav Bhalla</span> 👋
      </h1>
      <p className="mt-6 text-xl md:text-2xl max-w-2xl animate-fadeIn delay-200">
        A passionate <span className="font-semibold">Software Development Student</span> eager to learn, 
        build real-world projects, and create impactful applications.
      </p>
      <div className="mt-8 flex gap-6 animate-fadeIn delay-300">
        <a
          href="/projects"
          className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-300 transition"
        >
          View My Work
        </a>
        <a
          href="/contact"
          className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
