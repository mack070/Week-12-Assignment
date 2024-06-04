import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import './globals.css';
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { Inter } from "next/font/google";
import ProfileForm from "./components/ProfileForm";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GITAWAYS",
  description: "Week 12 Assignment",
};

export default async function RootLayout({ children }) {
  const { userId } = auth();

const profiles = await db.query(
    `SELECT * FROM profiles WHERE clerk_id = '${userId}'`
  );


  // if the user is logged in AND they don't have an entry in the profiles table, add it
  if (profiles.rowCount === 0 && userId !== null) {
    // add user to database
    await db.query(`INSERT INTO profiles (clerk_id) VALUES ('${userId}')`);
  }

  const hasUsername = profiles.rows[0]?.username !== null ? true : false;


  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <Link href="/">Home</Link>
      <Link href="/about-us">About Us</Link>
      <Link href="/curacao">Curacao</Link>
      <Link href="/new-york">New York</Link>
      <Link href="/ontario">Ontario</Link>
      <Link href="/toulouse">Toulouse</Link>
      <Link href="/reviews">Reviews</Link>
      <Link href="/myprofile">My Profile</Link>
      <Link href="/contact-us">Contact Us</Link>
        </header>
          <main>
          <SignedOut>{children}</SignedOut>

            <SignedIn>
              {hasUsername && children}
              {!hasUsername && <ProfileForm />}
            </SignedIn>

          </main>
          <footer>
          <h2>GITAWAYS</h2>
        </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}