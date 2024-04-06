import { Inter } from "next/font/google";
import "./globals.css";
import { favorit } from "./styles/fonts";
import Navbar from "./_components/navbar/navbar";
import Discover from "./_components/discover/discover";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Echospehere",
  description:
    "Let your voice be Echoed and Heard within out limitless Spehere",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main
          className={`flex ${favorit.className} justify-center w-[75vw] mx-auto min-h-screen`}
        >
          <Navbar />
          {children}
          <Discover />
        </main>
      </body>
    </html>
  );
}
