import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-principal",
  subsets: ["latin"],
  display: 'swap'
});

const montserrat = Montserrat({
  variable: "--font-secondary",
  subsets: ["latin"],
  display: 'swap'
});

export const metadata = {
  title: "Muebles Casa River",
  description: "Muebles Casa River",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body className={`${playfair.variable} ${montserrat.variable} antialiased`}>
        <Navigation/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
