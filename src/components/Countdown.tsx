import { AlertCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Countdown() {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	});

	// Countdown timer effect with localStorage
	useEffect(() => {
		// Check if we have a stored end date
		let endDate: Date;
		const storedEndDate = localStorage.getItem('mentorshipCountdownEnd');

		if (storedEndDate) {
			// Use the stored end date
			endDate = new Date(Number.parseInt(storedEndDate));

			// If the stored date is in the past, reset it
			if (endDate.getTime() < new Date().getTime()) {
				endDate = new Date();
				endDate.setDate(endDate.getDate() + 7);
				localStorage.setItem(
					'mentorshipCountdownEnd',
					endDate.getTime().toString()
				);
			}
		} else {
			// Set the end date to 7 days from now and store it
			endDate = new Date();
			endDate.setDate(endDate.getDate() + 7);
			localStorage.setItem(
				'mentorshipCountdownEnd',
				endDate.getTime().toString()
			);
		}

		const timer = setInterval(() => {
			const now = new Date();
			const difference = endDate.getTime() - now.getTime();

			if (difference <= 0) {
				// Reset the timer when it reaches zero
				endDate = new Date();
				endDate.setDate(endDate.getDate() + 7);
				localStorage.setItem(
					'mentorshipCountdownEnd',
					endDate.getTime().toString()
				);

				// Update the time left with the new values
				setTimeLeft({
					days: 7,
					hours: 0,
					minutes: 0,
					seconds: 0
				});

				return;
			}

			setTimeLeft({
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor(
					(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
				),
				minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
				seconds: Math.floor((difference % (1000 * 60)) / 1000)
			});
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<div>
			<div className="mb-8 flex items-center justify-center space-x-4">
				<div className="flex flex-col items-center">
					<div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground text-xl">
						{timeLeft.days}
					</div>
					<span className="mt-2 text-muted-foreground text-xs">Days</span>
				</div>
				<div className="flex flex-col items-center">
					<div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground text-xl">
						{timeLeft.hours}
					</div>
					<span className="mt-2 text-muted-foreground text-xs">Hours</span>
				</div>
				<div className="flex flex-col items-center">
					<div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground text-xl">
						{timeLeft.minutes}
					</div>
					<span className="mt-2 text-muted-foreground text-xs">Minutes</span>
				</div>
				<div className="flex flex-col items-center">
					<div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground text-xl">
						{timeLeft.seconds}
					</div>
					<span className="mt-2 text-muted-foreground text-xs">Seconds</span>
				</div>
			</div>
			<div className="mb-8 flex items-center justify-center space-x-2 rounded-lg bg-primary/10 p-4 text-primary">
				<AlertCircle className="h-5 w-5" />
				<span className="font-medium">
					Hurry! This offer expires in {timeLeft.days} days
				</span>
			</div>
		</div>
	);
}
