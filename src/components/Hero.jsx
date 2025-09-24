export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-indigo-600 to-pink-500 text-white py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hi, I’m <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-200">Pranav</span> 
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-xl">
            I build modern web apps with Next.js, Tailwind and Python. I love turning ideas into polished products.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#projects" className="inline-block px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold shadow hover:shadow-lg">View Projects</a>
            <a href="/resume.pdf" className="inline-block px-6 py-3 border border-white rounded-lg hover:bg-white/10">Download Resume</a>
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-xl max-w-sm mx-auto text-center">
            <div className="w-40 h-40 rounded-full mx-auto bg-white/10 flex items-center justify-center text-3xl font-bold">PB</div>
            <p className="mt-4">Software Developer • Python • Next.js</p>
          </div>
        </div>
      </div>
    </section>
  );
}
