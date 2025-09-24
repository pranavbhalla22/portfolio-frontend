import "../styles/global.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Pranav Bhalla — Portfolio",
  description: "Portfolio built with Next.js & Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <footer className="text-center py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Pranav Bhalla — Built with Next.js & Tailwind
        </footer>
      </body>
    </html>
  );
}
