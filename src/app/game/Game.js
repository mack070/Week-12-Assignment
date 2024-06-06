// components/Game.js
"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./Game.module.css";

const Game = () => {
	const [score, setScore] = useState(0);
	const [timeLeft, setTimeLeft] = useState(30);
	const [airplanes, setAirplanes] = useState([]);
	const gameAreaRef = useRef(null);

	useEffect(() => {
		if (timeLeft > 0) {
			const timer = setInterval(() => {
				setTimeLeft((prev) => prev - 1);
			}, 1000);

			return () => clearInterval(timer);
		}
	}, [timeLeft]);

	useEffect(() => {
		if (timeLeft > 0) {
			const makeAirplane = () => {
				const x = Math.floor(
					Math.random() * (gameAreaRef.current.clientWidth - 50)
				);
				const y = Math.floor(
					Math.random() * (gameAreaRef.current.clientHeight - 50)
				);
				setAirplanes((prev) => [...prev, { x, y, id: Date.now() }]);
			};

			const interval = setInterval(makeAirplane, 1000);

			return () => clearInterval(interval);
		}
	}, [timeLeft]);

	const handleAirplaneClick = (id) => {
		setScore((prev) => prev + 10);
		setAirplanes((prev) => prev.filter((plane) => plane.id !== id));
	};

	return (
		<div className={styles.container}>
			<h1 className=' font-bold-xl'>
				Play the Airplane Game - To gain GitAway points
			</h1>
			<p className=' font-bold-lg'>Score: {score}</p>
			<p className=' font-bold-lg'>Time Left: {timeLeft} seconds</p>
			<div className={styles.gameArea} ref={gameAreaRef}>
				{airplanes.map((plane) => (
					<div
						key={plane.id}
						className={styles.airplane}
						style={{ left: plane.x, top: plane.y }}
						onClick={() => handleAirplaneClick(plane.id)}
					>
						✈️
					</div>
				))}
			</div>
			{timeLeft === 0 && (
				<h2 className='font-bold'>
					Game Over! You have earned {score} points!
				</h2>
			)}
		</div>
	);
};

export default Game;
