"use client";
import React from "react";
import "../../../node_modules/elevator.js";
import "../../../node_modules/elevator.js/elevator.js";
import ElevatorTrip from "../components/Elevator/Elevator.js";
export default function Curacao() {
	return (
		<ElevatorTrip
			targetId='top'
			mainAudio='audio/Club.mp3'
			endAudio='audio/ding.mp3'
		>
			<div>
				<header className='Curaçao-logo'>
					<img
						src='https://trello.com/1/cards/665dc790014f1f79fe9d1fd1/attachments/665dc7a965b2243bf089f97b/previews/665dc7aa65b2243bf089f988/download/My_first_design_1_(5).jpeg'
						alt='Curaçao Logo'
					></img>
				</header>
				<div className='grid grid-cols-3 gap-4 p-4'>
					<div className='image-section-one'>
						<img
							className='w-full h-48 object-cover'
							src='https://trello.com/1/cards/665dd2fb2697bbcdeb5495eb/attachments/665dd5491fafcce3849e279f/previews/665dd54a1fafcce3849e3463/download/106285-Curacao.jpg'
							alt='Curaçao Logo'
						></img>
					</div>
					<div className='image-section-one'>
						<img
							className='w-full h-48 object-cover'
							src='https://trello.com/1/cards/665dd2fb2697bbcdeb5495eb/attachments/665dd341f390daf21ac1ea35/previews/665dd342f390daf21ac1ec78/download/51317-Willemstad.jpg'
							alt='longshot of a beach'
						></img>
					</div>
					<div className='image-section-one'>
						<img
							className='w-full h-48 object-cover'
							src='https://img.static-kl.com/images/media/554799FD-14AA-4EB3-9BEC6B52EC8F5068?w=1280'
							alt='turtle swimming in the sea'
						></img>
					</div>
				</div>
				<div className='bg-rose-200 p-4'>
					<h2>
						<ul className='space-x-5 p-2'>
							<p className='space-x-5 text-pretty text-center font-bold text-l p-2'>
								Caribbean Getaway Dive into the vibrant hues of Curaçao, a
								paradise where Dutch charm meets tropical tranquillity. Your
								journey begins in the colourful capital of Willemstad, a UNESCO
								World Heritage site, where pastel buildings reflect a rich
								cultural mosaic.
							</p>
							<br></br>
							<li>
								<b>Day 1: </b> Willemstad Wanderings Arrive and settle into a
								beachfront resort, then explore the historic streets of
								Willemstad. Visit the floating market and the iconic Queen Emma
								Bridge as you soak in the lively atmosphere.
							</li>
							<br></br>
							<li>
								<b>Day 2: </b> Underwater Exploration Embark on a snorkelling
								adventure to discover the island’s famed coral reefs. Swim
								alongside a kaleidoscope of marine life and uncover the sunken
								secrets of the Caracas Bay.
							</li>
							<br></br>
							<li>
								<b>Day 3: </b> Island Flavors Taste the island&apos;s culinary
								delights with a fusion of Caribbean and Dutch cuisine. Sample
								the famous Blue Curaçao liqueur and enjoy a beachside barbecue
								under the stars.
							</li>
							<br></br>
							<li>
								<b>Day 4: </b> Natural Wonders Venture to the rugged northern
								coast to witness the dramatic Shete Boka National Park and relax
								in the serene beauty of the Hato Caves, adorned with ancient
								limestone formations.
							</li>
							<br></br>
							<li>
								<b>Day 5: </b> Leisure and Luxury Spend your final day unwinding
								on the pristine sands of Kenepa Beach or indulge in a spa
								treatment infused with local aloe vera.
							</li>
						</ul>
						<p className='space-x-5 text-pretty text-center font-bold text-l p-2'>
							Caribbean Getaway Dive into the vibrant hues of Curaçao, a
							paradise where Dutch charm meets tropical tranquillity. Your
							journey begins in the colourful capital of Willemstad, a UNESCO
							World Heritage site, where pastel buildings reflect a rich
							cultural mosaic.
						</p>
					</h2>
				</div>
				<div className='image-section-two grid grid-cols-3 gap-4 p-4'>
					<img
						className='w-full h-48 object-cover'
						src='https://img.static-kl.com/images/media/FE979D35-B911-4598-85E11AAC8ECC22B8?w=1280'
						alt='Tropical beach'
					></img>

					<div className='image-section-two'>
						<img
							className='w-full h-48 object-cover'
							src='https://trello.com/1/cards/665dd2fb2697bbcdeb5495eb/attachments/665eded5efd675f5d174b815/previews/665eded5efd675f5d174b986/download/curacao-dutch-island.jpg'
							alt='colourful houses'
						></img>
					</div>
					<div className='image-section-two'>
						<img
							className='w-full h-48 object-cover'
							src='https://static01.nyt.com/images/2020/02/06/travel/06Hours-Curacao1/merlin_167925693_ee2f564e-552a-422a-9a4a-38dd56673004-superJumbo.jpg?quality=75&auto=webp'
							alt='aerial photo of the beach'
						></img>
					</div>
				</div>
				<div className='grid grid-cols-3 gap-4 p-4'>
					<div className='image-section-one'>
						<img
							className='w-full h-48 object-cover'
							src='https://trello.com/1/cards/665dd2fb2697bbcdeb5495eb/attachments/665dd5491fafcce3849e279f/previews/665dd54a1fafcce3849e3463/download/106285-Curacao.jpg'
							alt='Curacao Logo'
						></img>
					</div>
					<div className='image-section-one'>
						<img
							className='w-full h-48 object-cover'
							src='https://trello.com/1/cards/665dd2fb2697bbcdeb5495eb/attachments/665dd341f390daf21ac1ea35/previews/665dd342f390daf21ac1ec78/download/51317-Willemstad.jpg'
							alt='ny image two'
						></img>
					</div>
					<div className='image-section-one'>
						<img
							className='w-full h-48 object-cover'
							src='https://img.static-kl.com/images/media/554799FD-14AA-4EB3-9BEC6B52EC8F5068?w=1280'
							alt='ny image three'
						></img>
					</div>
				</div>
				<div className='bg-rose-200 p-4'>
					<h1 className='font-bold p-1 text-center text-xl'>
						Here is why Curaçao is such a wonderful place
					</h1>
					<h2>
						<ul className='space-x-5 p-2'>
							<br></br>
							<li>
								<b>Stunning Beaches</b> Curaçao boasts over 35 beautiful
								beaches, each with its unique charm, from the lively Jan Thiel
								Beach to the secluded Playa Kenepa.
							</li>
							<br></br>
							<li>
								<b>Colorful Capital</b> The capital city, Willemstad, is a
								UNESCO World Heritage site famous for its vibrant,
								pastel-colored colonial architecture and the iconic Handelskade
								waterfront.
							</li>
							<br></br>
							<li>
								<b>Rich Culture</b> Curaçao has a diverse cultural heritage
								influenced by Dutch, Spanish, and African roots, which is
								reflected in its music, dance, and festivals like Carnival.
							</li>
							<br></br>
							<li>
								<b>Perfect Weather</b> Enjoy year-round warm weather with
								average temperatures around 27°C (81°F) and very little
								rainfall, making it an ideal holiday destination.
							</li>
							<br></br>
							<li>
								<b>Diverse Marine Life:</b> Curaçao is a diver&apos;s paradise
								with crystal-clear waters, extensive coral reefs, and marine
								life including sea turtles, dolphins, and colorful tropical
								fish.
							</li>
							<br></br>
							<li>
								<b>Delicious Cuisine:</b> Savor a blend of Caribbean and
								international flavors with local dishes such as Keshi Yena
								(stuffed cheese) and fresh seafood, along with the island&pos
								famous Blue Curaçao liqueur.
							</li>
							<br></br>
							<li>
								<b>Outdoor Adventures:</b> From hiking in Christoffel National
								Park to exploring the Hato Caves and their ancient petroglyphs,
								Curaçao offers numerous outdoor activities for adventure
								seekers.
							</li>
							<br></br>
							<li>
								<b>Diverse Marine Life:</b> Curaçao is a diver&apos;s paradise
								with crystal-clear waters, extensive coral reefs, and marine
								life including sea turtles, dolphins, and colorful tropical
								fish.
							</li>
							<br></br>
							<li>
								<b>Historical Landmarks:</b> Discover the island&apos;s history
								with visits to the Kura Hulanda Museum, Fort Amsterdam, and the
								old plantation houses (landhuizen) scattered around the island.
							</li>
							<br></br>
							<li>
								<b>Warm Hospitality:</b> The locals, known as Curaçaoans, are
								known for their friendly and welcoming nature, making visitors
								feel right at home.
							</li>
							<br></br>
							<li>
								<b>Shopping and Nightlife:</b> Willemstad offers a vibrant
								shopping scene with unique boutiques and local markets, and a
								lively nightlife with beach bars, clubs, and live music to keep
								you entertained after sunset.
							</li>
						</ul>
						<p className='space-x-5 text-pretty text-center font-bold text-l p-2'>
							Come experience the charm and beauty of Curaçao for an
							unforgettable holiday!
						</p>
					</h2>
				</div>
				<br></br>
				<h2 className='font-bold p-1 text-center text-xl'>
					A playlist for your fight to Curaçao
				</h2>
				<iframe
					className='iframe rounded-xl p-6'
					src='https://open.spotify.com/embed/playlist/3uRyyu2dMzSejFncmz4HzP?utm_source=generator&theme=0'
					width='100%'
					height='652'
					allowFullScreen=''
					allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
					loading='lazy'
				></iframe>
				<div className='image-section-two grid grid-cols-3 gap-4 p-4'>
					<img
						className='w-full h-48 object-cover'
						src='https://img.static-kl.com/images/media/FE979D35-B911-4598-85E11AAC8ECC22B8?w=1280'
						alt='Tropical beach'
					></img>

					<div className='image-section-two'>
						<img
							className='w-full h-48 object-cover'
							src='https://trello.com/1/cards/665dd2fb2697bbcdeb5495eb/attachments/665eded5efd675f5d174b815/previews/665eded5efd675f5d174b986/download/curacao-dutch-island.jpg'
							alt=' a row of colorful houses'
						></img>
					</div>
					<div className='image-section-two'>
						<img
							className='w-full h-48 object-cover'
							src='https://static01.nyt.com/images/2020/02/06/travel/06Hours-Curacao1/merlin_167925693_ee2f564e-552a-422a-9a4a-38dd56673004-superJumbo.jpg?quality=75&auto=webp'
							alt='aerial photo of the beach'
						></img>
					</div>
				</div>
			</div>
		</ElevatorTrip>
	);
}
