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
