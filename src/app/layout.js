import {
	ClerkProvider,
	SignInButton,
	SignedIn,
	SignedOut,
	UserButton,
} from "@clerk/nextjs";
import "./globals.css";
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
			<html lang='en'>
				<body className=' '>
					<header className='header bg-sky-500/50 tracking-wide font-normal '>
						<SignedOut>
							<SignInButton className='sign-in  bg-warmGray-100 p-1 rounded-lg font-bold text-xl hover:border-t-rose-300' />
						</SignedOut>
						<SignedIn>
							<UserButton />
						</SignedIn>
						<Link className='nav-bar hover:font-bold hover:underline' href='/'>
							Home
						</Link>
						<Link
							className='nav-bar hover:font-bold hover:underline'
							href='/about-us'
						>
							About Us
						</Link>
						<Link
							className='nav-bar hover:font-bold hover:underline'
							href='/curacao'
						>
							Curacao
						</Link>
						<Link
							className='nav-bar hover:font-bold hover:underline'
							href='/new-york'
						>
							New York
						</Link>
						<Link
							className='nav-bar hover:font-bold hover:underline'
							href='/ontario'
						>
							Ontario
						</Link>
						<Link
							className='nav-bar hover:font-bold hover:underline'
							href='/toulouse'
						>
							Toulouse
						</Link>
						<Link
							className='nav-bar hover:font-bold hover:underline'
							href='/reviews'
						>
							Reviews
						</Link>
						<Link
							className='nav-bar hover:font-bold hover:underline'
							href='/myprofile'
						>
							My Profile
						</Link>
						<Link
							className='nav-bar hover:font-bold hover:underline'
							href='/contact-us'
						>
							Contact Us
						</Link>
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
