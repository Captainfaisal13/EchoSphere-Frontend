import { Inter } from "next/font/google";
import "./globals.css";
import { favorit } from "./styles/fonts";
import ConditionalLayout from "./conditionalLayout";
import { AppProvider } from "./context";
import Providers from "./providers";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Echospehere",
  description:
    "Let your voice be Echoed and Heard within out limitless Spehere",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body className={inter.className}>
        <main className={`flex ${favorit.className} justify-center bg-bg-0`}>
          <ThemeProvider>
            <Providers>
              <AppProvider>
                <ConditionalLayout>{children}</ConditionalLayout>
              </AppProvider>
            </Providers>
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
