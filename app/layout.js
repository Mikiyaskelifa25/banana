import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: "Sewasew | Premium Banana Fiber Paper Products",
  description:
    "Based in Arba Minch, Sewasew creates 100% biodegradable, tree-free banana fiber paper products. Custom wholesale bags and packaging with a 200 MOQ.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="bg-parchment font-sans antialiased leading-relaxed">
        {children}
      </body>
    </html>
  );
}
