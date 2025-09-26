export default function Skills() {
  return (
    <section className="min-h-screen bg-white flex flex-col justify-center items-center text-gray-900 pt-20">
      <h1 className="text-4xl font-bold">My Skills</h1>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-6 text-lg">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">Python</div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">JavaScript</div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">Next.js</div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">Tailwind CSS</div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">Flask</div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">SQL</div>
      </div>
    </section>
  );
}
