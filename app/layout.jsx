import { Inter } from "next/font/google";
import "./globals.css";
import { favorit } from "./styles/fonts";
import ConditionalLayout from "./conditionalLayout";
import { AppProvider } from "./context";
import Providers from "./providers";

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
        <main className={`flex ${favorit.className} justify-center`}>
          <Providers>
            <AppProvider>
              <ConditionalLayout>{children}</ConditionalLayout>
            </AppProvider>
          </Providers>
        </main>
      </body>
    </html>
  );
}
