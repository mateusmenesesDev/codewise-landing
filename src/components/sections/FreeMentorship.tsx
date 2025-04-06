import { useEffect, useRef } from 'react';
import CalendlySchedule from '../CalendlySchedule';
import Countdown from '../Countdown';

export default function FreeMentorship() {
	const titleRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('opacity-100', 'translate-y-0');
					entry.target.classList.remove('opacity-0', 'translate-y-10');
					observer.unobserve(entry.target);
				}
			},
			{ threshold: 0.1 }
		);

		if (titleRef.current) {
			observer.observe(titleRef.current);
		}

		return () => {
			if (titleRef.current) {
				observer.unobserve(titleRef.current);
			}
		};
	}, []);

	return (
		<section id="free-mentorship" className="section-padding bg-secondary/50">
			<div className="container mx-auto">
				<div
					className="mx-auto mb-16 max-w-2xl translate-y-10 text-center opacity-0 transition-all duration-1000"
					ref={titleRef}
				>
					<div className="mb-3 font-medium text-primary">
						Limited Time Offer
					</div>
					<h2 className="mb-6 font-bold text-3xl md:text-4xl">
						Don't lose time, schedule your free mentorship now!
					</h2>
					<p className="mb-6 text-muted-foreground">
						This is a unique opportunity to get a free mentorship from one of
						our mentors.
					</p>

					<Countdown />

					<CalendlySchedule />
				</div>
			</div>
		</section>
	);
}
