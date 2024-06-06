import Elevator from "elevator.js";
import React, { useEffect, useRef } from "react";
const ElevatorTrip = ({ targetId, mainAudio, endAudio, children }) => {
	const elevatorRef = useRef(null);

	useEffect(() => {
		const elevator = new Elevator({
			element: elevatorRef.current,
			targetElement: document.getElementById(targetId),
			mainAudio,
			endAudio,
		});

		// return () => {};
	}, [targetId, mainAudio, endAudio]);

	const handleElevate = () => {
		elevatorRef.current.elevate();
	};

	return (
		<div>
			<div>
				{children}
				<button
					onClick={handleElevate}
					ref={elevatorRef}
					className='fixed bottom-4 right-4 p-2 bg-amber-900 text-white rounded-full'
				>
					Scroll to Top
				</button>
			</div>
		</div>
	);
};
export default ElevatorTrip;
// import React, { useEffect, useRef } from "react";
// import dynamic from "next/dynamic";

// // Dynamically import elevator.js to ensure it only runs on the client side
// const Elevator = dynamic(() => import("elevator.js"));

// const ElevatorTrip = ({ targetId, mainAudio, endAudio, children }) => {
// 	const elevatorRef = useRef(null);
// 	const buttonRef = useRef(null);

// 	useEffect(() => {
// 		const elevator = new Elevator({
// 			element: buttonRef.current,
// 			targetElement: document.getElementById(targetId),
// 			mainAudio,
// 			endAudio,
// 		});

// 		elevatorRef.current = elevator;

// 		return () => {
// 			elevatorRef.current = null;
// 		};
// 	}, [targetId, mainAudio, endAudio]);

// 	const handleElevate = () => {
// 		if (elevatorRef.current) {
// 			elevatorRef.current.elevate();
// 		}
// 	};

// 	return (
// 		<div>
// 			{children}
// 			<button
// 				onClick={handleElevate}
// 				ref={buttonRef}
// 				className='fixed bottom-4 right-4 p-2 bg-amber-900 text-white rounded-full'
// 			>
// 				Scroll to Top
// 			</button>
// 		</div>
// 	);
// };

// export default ElevatorTrip;
