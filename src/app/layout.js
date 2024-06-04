import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gitaways",
  description: "Week 12 Assignment",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">


      <body>
      <header>
<nav className="navbar">
      <Link href="/">HOME</Link>
      <Link href="/about-us">About Us</Link>
      <Link href="/curacao">Curacao</Link>
      <Link href="/new-york">New York</Link>
      <Link href="/ontario">Ontario</Link>
      <Link href="/toulouse">Toulouse</Link>
      <Link href="/contact-us">Contact Us</Link>
    </nav>
</header>


      {children}
      </body>
    </html>
  );
}
