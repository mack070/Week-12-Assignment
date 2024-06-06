"use client";
import React, { useEffect } from "react";
import "../../../node_modules/elevator.js";
import "../../../node_modules/elevator.js/elevator.js";
import ElevatorTrip from "../components/Elevator/Elevator.js";
export default function Ontario() {
	return (
		<ElevatorTrip
			targetId='top'
			mainAudio='audio/July Talk.mp3'
			endAudio='audio/ding.mp3'
		>
			<div>
				<header className='Ontario-logo'>
					<img
						src='https://trello.com/1/cards/665dc790014f1f79fe9d1fd1/attachments/665dc7a9d502cd44475943fc/previews/665dc7aad502cd444759440a/download/My_first_design_1_(3).jpeg'
						alt='Ontario Logo'
					></img>
				</header>
				<div className='grid grid-cols-3 gap-4 p-4'>
					<div className='image-section-one'>
						<img
							className='w-full h-48 object-cover'
							src='https://trello.com/1/cards/665dd31a2e9b42cf7578d691/attachments/665dd7e218f30225f6ace3ab/previews/665dd7e318f30225f6ace3b3/download/2308422848369234051_n.jpg'
							alt='Ontario on water'
						></img>
					</div>
					<div className='image-section-one'>
						<img
							className='w-full h-48 object-cover'
							src='https://trello.com/1/cards/665dd31a2e9b42cf7578d691/attachments/665dd7e282cb311f019ea4f3/previews/665dd7e382cb311f019ea67b/download/7142133609312943129_n.jpg'
							alt='Ontario by the water'
						></img>
					</div>
					<div className='image-section-one'>
						<img
							className='w-full h-48 object-cover'
							src='https://trello.com/1/cards/665dd31a2e9b42cf7578d691/attachments/665dd7e58be74f99ed86b9e0/previews/665dd7e68be74f99ed86bb79/download/171649.jpg'
							alt='Ontario in the snow'
						></img>
					</div>
				</div>
				<div className='bg-rose-200 p-4'>
					<h1 className='font-bold p-1 text-center text-xl'>
						Ontario Holiday Information
					</h1>
					<h2>
						<ul className='space-x-5 p-2'>
							<p className='space-x-5 text-pretty text-center font-bold text-l p-2'>
								Welcome to Canada&apos;s Diverse Province and feel free to
								Explore Ontario&apos;s stunning landscapes, from the thundering
								Niagara Falls to the tranquil lakes of Muskoka. Embrace the
								diversity of experiences in Canada&apos;s most populated
								province.
							</p>
							<br></br>
							<li>
								<b>Day 1: </b>Toronto&apos;s Towering Sights Begin in Toronto
								with a visit to the CN Tower, enjoying the urban panorama.
								Wander through the Distillery District and experience the
								city&apos;s vibrant arts scene.
							</li>
							<br></br>
							<li>
								<b>Day 2: </b> Next travel to Niagara Falls and feel the mist of
								the mighty cascades. Take a boat tour to get up close to the
								stunningly beautiful falls, and visit the charming town of
								Niagara-on-the-Lake for an unforgettable experience like no
								other.
							</li>
							<br></br>
							<li>
								<b>Day 3: </b> Find cultural connections when you Head to
								Ottawa, Canada&apos;s capital, to explore Parliament Hill and
								the national museums. Learn about Canada&apos;s history and
								cultural heritage.
							</li>
							<br></br>
							<li>
								<b>Day 4: </b> Join our natural escapes retreat in Algonquin
								Provincial Park for a day of hiking, wildlife spotting, and
								canoeing in pristine wilderness.
							</li>
							<br></br>
							<li>
								<b>Day 5: </b> Experience the cottage country and relax in
								Muskoka, known for its idyllic cottages and clear lakes. Then
								round up your trip with a peaceful sunset cruise, giving you
								time to reflect on the beauty of Ontario.
							</li>
						</ul>
						<p className='space-x-5 text-pretty text-center font-bold text-l p-2'>
							You&apos;ll find each destination offers its own unique blend of
							experiences, ensuring that your holiday will be filled with
							cherished memories. So make sure to book your dream getaway today
							and let the adventure begin!
						</p>
					</h2>
				</div>
				<div className='image-section-two grid grid-cols-3 gap-4 p-4'>
					<div className='image-section-two'>
						<img
							className='w-full h-48 object-cover'
							src='https://trello.com/1/cards/665dd31a2e9b42cf7578d691/attachments/665dd7e58e6f2ab3e4089d0e/previews/665dd7e68e6f2ab3e4089feb/download/172308.jpg'
							alt='Ontario green waterfall'
						></img>
					</div>
					<div className='image-section-two'>
						<img
							className='w-full h-48 object-cover'
							src='https://trello.com/1/cards/665dd31a2e9b42cf7578d691/attachments/665dd7e576d9634bf7db3618/download/164252.jpg'
							alt='Ontario icy water'
						></img>
					</div>
					<div className='image-section-two'>
						<img
							className='w-full h-48 object-cover'
							src='https://trello.com/1/cards/665dd31a2e9b42cf7578d691/attachments/665dd7e5936b51b6a3fb2c77/previews/665dd7e7936b51b6a3fb2c83/download/172733.jpg'
							alt='Ontario christmas lights'
						></img>
					</div>
				</div>
				<div className='bg-rose-200 p-4'>
					<h1 className='font-bold p-1 text-center text-xl'>
						Discover the beauty and excitement of Ontario, where you can
						experience the awe-inspiring Niagara Falls, vibrant cities like
						Toronto and Ottawa, and serene natural landscapes perfect for
						outdoor adventures.
					</h1>
					<h2>
						<ul className='space-x-5 p-2'>
							<br></br>
							<li>
								<b>Largest Population:</b> Ontario is the most populous province
								in Canada, with over 14 million residents, making up about 38%
								of the country&apos;s population.
							</li>
							<br></br>
							<li>
								<b>Economic Hub:</b> Ontario is Canada&apos;s economic
								powerhouse, contributing more than 40% of the nation&apos;s GDP.
								It&apos;s home to many industries, including manufacturing,
								finance, and technology.
							</li>
							<br></br>
							<li>
								<b>Natural Beauty:</b> Ontario is known for its stunning natural
								landscapes, including the world-famous Niagara Falls, one of the
								most visited natural attractions in the world.
							</li>
							<br></br>
							<li>
								<b>Toronto:</b> The capital city of Ontario, is also the largest
								city in Canada. It&apos;s a major cultural, financial, and
								entertainment hub with a diverse population.
							</li>
							<br></br>
							<li>
								<b>Great Lakes:</b> Ontario is bordered by four of the five
								Great Lakes – Lake Superior, Lake Huron, Lake Erie, and Lake
								Ontario – which contain about one-fifth of the world&apos;s
								fresh surface water.
							</li>
							<br></br>
							<li>
								<b>Cottage Country:</b> The province is famous for its
								&quot;cottage country,&quot; particularly the Muskoka region,
								where many people own or rent summer homes to enjoy the
								beautiful lakes and forests.
							</li>
							<br></br>
							<li>
								<b>Multicultural Province:</b> Ontario is one of the most
								multicultural regions in the world, with Toronto being
								particularly diverse. More than half of Toronto&apos;s
								population was born outside of Canada.
							</li>
							<br></br>
							<li>
								<b>Ottawa – The Capital</b> Ottawa, the capital city of Canada,
								is located in Ontario. It&apos;s known for its beautiful
								architecture, including Parliament Hill, and numerous national
								museums and cultural institutions.
							</li>
							<br></br>
							<li>
								<b>Education Hub:</b> Ontario boasts some of Canada’s top
								universities and colleges, including the University of Toronto,
								McMaster University, and the University of Waterloo, which are
								renowned for their research and academic programs.
							</li>
							<br></br>
							<li>
								<b>Vast Wilderness:</b> The province has numerous provincial
								parks and conservation areas, including Algonquin Provincial
								Park, which offers vast wilderness areas for camping, canoeing,
								and wildlife watching.
							</li>
							<br></br>
						</ul>
						<p className='space-x-5 text-pretty text-center font-bold text-l p-2'>
							Immerse yourself in the province&apos;s rich cultural heritage and
							enjoy world-class dining, entertainment, and unique local
							festivals year-round.
						</p>
					</h2>
				</div>
				<br></br>
				<h2 className='font-bold p-1 text-center text-xl'>
					A playlist for your fight to Ontario
				</h2>
				<iframe
					className='iframe rounded-xl p-6'
					src='https://open.spotify.com/embed/playlist/7k0SltzUgCbRYuFqHDEXia?utm_source=generator&theme=0'
					width='100%'
					height='652'
					allowfullscreen=''
					allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
					loading='lazy'
				></iframe>
				<div className='image-section-two grid grid-cols-3 gap-4 p-4'>
					<img
						className='w-full h-48 object-cover'
						src='https://trello.com/1/cards/665dd31a2e9b42cf7578d691/attachments/66605b30e3a86cb91a574230/previews/66605b31e3a86cb91a574384/download/162467.jpeg'
						alt=' moose in the water'
					></img>

					<div className='image-section-two'>
						<img
							className='w-full h-48 object-cover'
							src='https://trello.com/1/cards/665dd31a2e9b42cf7578d691/attachments/66605b3225842de28fb1dcba/previews/66605b3325842de28fb1e228/download/162447.jpg'
							alt=' food containing rice'
						></img>
					</div>
					<div className='image-section-two'>
						<img
							className='w-full h-48 object-cover'
							src='https://images.unsplash.com/photo-1601923146328-310db041a805?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
							alt='View of a landmark'
						></img>
					</div>
				</div>
			</div>
		</ElevatorTrip>
	);
}
