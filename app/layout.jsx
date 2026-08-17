import { Outfit } from "next/font/google";
import "./globals.css";

//componens
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// theme provider
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Raymond King Setia | Portfolio",
  description:
    "Portfolio of Raymond King Setia, Robotics, Cognition and Intelligence M.Sc. student at TUM. Robotics, AI and software engineering projects, experience and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute= "class" defaultTheme='light'>
          <Header/>
          {children}
          <Footer/>
        </ThemeProvider>
        </body>
    </html>
  );
}
