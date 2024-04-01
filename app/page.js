import Image from "next/image";
import Navbar from "./_components/navbar/navbar";
import MainContent from "./_components/main/main";
import Discover from "./_components/discover/discover";
import localfont from "next/font/local";

const favorit = localfont({
  src: [
    {
      path: "../public/_assets/fonts/extended/favorit-light.ttf",
      weight: "300",
    },
    {
      path: "../public/_assets/fonts/extended/favorit-regular.ttf",
      weight: "400",
    },
    {
      path: "../public/_assets/fonts/extended/favorit-medium.ttf",
      weight: "500",
    },
    {
      path: "../public/_assets/fonts/extended/favorit-bold.ttf",
      weight: "700",
    },
    {
      path: "../public/_assets/fonts/extended/favorit-extrabold.ttf",
      weight: "800",
    },
  ],
  variable: "--font-favorite",
});

export default function Home() {
  return (
    <main
      className={`flex ${favorit.className} justify-center w-[75vw] mx-auto min-h-screen`}
    >
      <Navbar />
      <MainContent />
      <Discover />
    </main>
  );
}
