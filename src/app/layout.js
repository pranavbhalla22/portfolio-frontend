import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Pranav Bhalla — Portfolio",
  description: "My portfolio built with Next.js and TailwindCSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
