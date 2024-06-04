import Image from "next/image";

export default function Curacao() {
	return (
		<div className='curacao-logo'>
			<img
				src='https://trello.com/1/cards/665dc790014f1f79fe9d1fd1/attachments/665dc7a965b2243bf089f97b/previews/665dc7aa65b2243bf089f988/download/My_first_design_1_(5).jpeg'
				alt='Curacao Logo'
			></img>
			<div className='grid grid-cols-3 gap-4'>
				<header className='image-section-one'>
					<img
						className='w-full h-48 object-cover'
						src='https://trello.com/1/cards/665dd2fb2697bbcdeb5495eb/attachments/665dd5491fafcce3849e279f/previews/665dd54a1fafcce3849e3463/download/106285-Curacao.jpg'
						alt='New York Logo'
					></img>
				</header>
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
			<div className='bg-rose-200'>
				<h1 className='font-bold p-1 text-center text-xl'>
					Curacao Holiday Information
				</h1>
				<h2>
					<ul className='space-x-5 p-2'>
						<p className='space-x-5 text-pretty text-center font-bold text-l p-2'>
							Caribbean Getaway Dive into the vibrant hues of Curacao, a
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
							delights with a fusion of Caribbean and Dutch cuisine. Sample the
							famous Blue Curacao liqueur and enjoy a beachside barbecue under
							the stars.
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
						Caribbean Getaway Dive into the vibrant hues of Curacao, a paradise
						where Dutch charm meets tropical tranquillity. Your journey begins
						in the colourful capital of Willemstad, a UNESCO World Heritage
						site, where pastel buildings reflect a rich cultural mosaic.
					</p>
				</h2>
			</div>
			<div className='image-section-two grid grid-cols-3 gap-4'>
				<img
					className='w-full h-48 object-cover'
					src='https://img.static-kl.com/images/media/FE979D35-B911-4598-85E11AAC8ECC22B8?w=1280'
					alt='Tropical beach'
				></img>

				<div className='image-section-two'>
					<img
						className='w-full h-48 object-cover'
						src='https://i.natgeofe.com/n/dab37bc4-5a5c-430d-afa8-50338ca50af4/curacao-dutch-island.jpg?w=718&h=479'
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
	);
}
