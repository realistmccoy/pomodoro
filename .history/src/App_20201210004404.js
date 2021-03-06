import React, { useState, useRef } from 'react';
import './App.css';
import { Button } from '@material-ui/core';

function padTime(time) {
	return time.toString().padStart(2, '0');
}

export default function App() {
	const [title, setTitle] = useState('let the countdown begin!');
	const [timeLeft, setTimeLeft] = useState(20 * 60);
	const intervalRef = useRef(null);

	function startTimer() {
		intervalRef.current = setInterval(() => {
			setTimeLeft((timeLeft) => {
				if (timeLeft >= 1) return timeLeft - 1;

				return 0;
			});
		}, 1000);
	}

	function stopTimer() {
		clearInterval(intervalRef.current);
		console.log(intervalRef.current);
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
				<ButtonGroup></ButtonGroup>
				<ButtonGroup color='primary' onClick={startTimer}>
					Start
				</ButtonGroup>
				<Button onClick={stopTimer}>Stop</Button>
				<Button>Reset</Button>
			</div>
		</div>
	);
}
