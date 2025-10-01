import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Pranav Bhalla - Portfolio",
  description: "Software Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
