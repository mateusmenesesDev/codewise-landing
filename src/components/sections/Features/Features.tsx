import { useEffect, useRef } from 'react';
import { features } from '../../../constants/features';
import { FeatureCard } from './FeatureCard';

const Features = () => {
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
		<section id="features" className="section-padding">
			<div className="container mx-auto">
				<div
					className="mx-auto mb-16 max-w-2xl translate-y-10 text-center opacity-0 transition-all duration-1000"
					ref={titleRef}
				>
					<div className="mb-3 font-medium text-primary">Why Choose Us</div>
					<h2 className="mb-6 font-bold text-3xl md:text-4xl">
						Accelerate Your Growth With Expert Mentorship
					</h2>
					<p className="text-muted-foreground">
						Our mentorship program combines technical expertise with
						personalized guidance to help you achieve your full potential as a
						full stack developer.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
					{features.map((feature, index) => (
						<FeatureCard
							key={feature.title}
							icon={feature.icon}
							title={feature.title}
							description={feature.description}
							delay={index * 100}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
