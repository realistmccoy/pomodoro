import React, { useState, useRef } from 'react';
import './App.css';
import { Button, ButtonGroup } from '@material-ui/core';

function padTime(time) {
	return time.toString().padStart(2, '0');
}

export default function App() {
	const [title, setTitle] = useState('Focus');
	const [timeLeft, setTimeLeft] = useState(20 * 60);
	const intervalRef = useRef(null);

	function startTimer() {
		setTitle(`You're doing great!`)
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

			<div>
				<ButtonGroup
					color='secondary'
					aria-label='outlined secondary button group'
				>
					<Button color='primary' onClick={startTimer}>
						Start
					</Button>
					<Button onClick={stopTimer}>Stop</Button>
					<Button>Reset</Button>
				</ButtonGroup>
			</div>
		</div>
	);
}
