import { Inter } from "next/font/google";
import "./globals.css";
import { favorit } from "./styles/fonts";
import Discover from "./_components/discover/discover";
import LayoutHeader from "./_components/header/layoutHeader";
import Providers from "./tanstackProvider";
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
          className={`flex ${favorit.className} justify-center mx-auto min-h-screen`}
        >
          <LayoutHeader>
            <Providers>{children}</Providers>
          </LayoutHeader>
          <Discover />
        </main>
      </body>
    </html>
  );
}
