import { useEffect, useRef } from 'react';

export const FeatureCard = ({
	icon: Icon,
	title,
	description,
	delay
}: {
	icon: React.ElementType;
	title: string;
	description: string;
	delay: number;
}) => {
	const featureRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setTimeout(() => {
						entry.target.classList.add('opacity-100', 'translate-y-0');
						entry.target.classList.remove('opacity-0', 'translate-y-10');
					}, delay);
					observer.unobserve(entry.target);
				}
			},
			{ threshold: 0.1 }
		);

		if (featureRef.current) {
			observer.observe(featureRef.current);
		}

		return () => {
			if (featureRef.current) {
				observer.unobserve(featureRef.current);
			}
		};
	}, [delay]);

	return (
		<div
			className="glass translate-y-10 rounded-2xl p-6 opacity-0 transition-all duration-1000 hover:shadow-lg"
			ref={featureRef}
		>
			<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
				<Icon className="h-6 w-6" />
			</div>
			<h3 className="mb-3 font-semibold text-xl">{title}</h3>
			<p className="text-muted-foreground">{description}</p>
		</div>
	);
};
