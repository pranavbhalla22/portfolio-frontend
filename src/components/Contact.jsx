export default function Contact() {
  return (
    <form className="max-w-lg mx-auto space-y-6">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-4 rounded-lg border dark:bg-gray-900 dark:border-gray-700"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-4 rounded-lg border dark:bg-gray-900 dark:border-gray-700"
      />
      <textarea
        placeholder="Your Message"
        rows="5"
        className="w-full p-4 rounded-lg border dark:bg-gray-900 dark:border-gray-700"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
      >
        Send Message
      </button>
    </form>
  );
}
