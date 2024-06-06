import Head from "next/head";
import Game from "./Game";
export default function Home() {
	return (
		<div>
			<Head>
				<title>Holiday Search Game</title>
				<meta
					name='description'
					content='Play a game to win points for your holiday!'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<Game />
			</main>
		</div>
	);
}
