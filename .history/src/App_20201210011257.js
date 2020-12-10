import React, { useState, useRef } from 'react';
import './App.css';
import { Button } from '@material-ui/core';

function padTime(time) {
	return time.toString().padStart(2, '0');
}

export default function App() {
	const [title, setTitle] = useState('Press START to begin');
	const [timeLeft, setTimeLeft] = useState(20 * 60);
	const [isRunning, setIsRunning] = useState(false)
	const intervalRef = useRef(null);

	function startTimer() {
		if (intervalRef.current != null) return;

		setTitle('FOCUS');
		intervalRef.current = setInterval(() => {
			setTimeLeft((timeLeft) => {
				if (timeLeft >= 1) return timeLeft - 1;
				resetTimer();
				return 0;
			});
		}, 1000);
	}

	function stopTimer() {
		if (intervalRef.current === null) return;
		setTitle('Get back to work');
		clearInterval(intervalRef.current);
		console.log(intervalRef.current);
	}

	function resetTimer() {
		clearInterval(intervalRef.current);
		setTitle('Ready to go another round?');
		setTimeLeft(20 * 60);
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
				<Button onClick={startTimer}>Start</Button>
				<Button onClick={stopTimer}>Stop</Button>
				<Button onClick={resetTimer}>Reset</Button>
			</div>
		</div>
	);
}
