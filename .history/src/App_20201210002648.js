import React, { useState } from 'react';
import './App.css';

function padTime(time) {
	return time.toString().padStart(2, '0');
}

let inter

export default function App() {
	const [title, setTitle] = useState('let the countdown begin!');
	const [timeLeft, setTimeLeft] = useState(20 * 60);
	

	function startTimer() {
		interval = setInterval(() => {
			setTimeLeft((timeLeft) => {
				if (timeLeft >= 1) return timeLeft - 1;

				return 0;
			});
		}, 1000);
	}

	function stopTimer() {
		clearInterval(interval)
	}

	const minutes = padTime(Math.floor(timeLeft / 60));
	const seconds = padTime(timeLeft - minutes * 60);

	return (
		<div className='app'>
			<h2>{title}</h2>

			<div className='timer'>
				<span>{minutes}</span>
				<span>:</span>
				<span>{seconds}</span>
			</div>

			<div className='buttons'>
				<button onClick={startTimer}>Start</button>
				<button onClick={stopTimer}>Stop</button>
				<button>Reset</button>
			</div>
		</div>
	);
}
