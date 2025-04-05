import { ArrowRight, Check } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface PlanProps {
	title: string;
	price: string;
	description: string;
	features: string[];
	recommended?: boolean;
	delay: number;
}

const PricingPlan = ({
	title,
	price,
	description,
	features,
	recommended = false,
	delay
}: PlanProps) => {
	const planRef = useRef<HTMLDivElement>(null);

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

		if (planRef.current) {
			observer.observe(planRef.current);
		}

		return () => {
			if (planRef.current) {
				observer.unobserve(planRef.current);
			}
		};
	}, [delay]);

	return (
		<div
			className={`translate-y-10 rounded-2xl opacity-0 transition-all duration-1000 ${
				recommended
					? 'border-2 border-primary bg-primary text-primary-foreground shadow-xl'
					: 'glass'
			}`}
			ref={planRef}
		>
			{recommended && (
				<div className="-mt-3 relative z-10 mx-auto inline-block rounded-full bg-primary-foreground px-3 py-1 font-semibold text-primary text-xs">
					Most Popular
				</div>
			)}
			<div className="p-6 md:p-8">
				<h3 className="mb-2 font-bold text-xl">{title}</h3>
				<p
					className={`mb-4 text-sm ${recommended ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}
				>
					{description}
				</p>

				<div className="mb-6">
					<span className="font-bold text-3xl">{price}</span>
					<span
						className={`text-sm ${recommended ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}
					>
						/month
					</span>
				</div>

				<ul className="mb-8 space-y-3">
					{features.map((feature) => (
						<li key={feature} className="flex items-start">
							<Check
								className={`mt-0.5 mr-3 h-5 w-5 ${
									recommended ? 'text-primary-foreground' : 'text-primary'
								}`}
							/>
							<span className="text-sm">{feature}</span>
						</li>
					))}
				</ul>

				<a
					href="#join"
					className={`flex w-full items-center justify-center rounded-xl py-3 font-medium text-sm transition-all duration-300 ${
						recommended
							? 'bg-primary-foreground text-primary hover:bg-primary-foreground/90'
							: 'bg-primary text-primary-foreground hover:bg-primary/90'
					}`}
				>
					Get Started
					<ArrowRight className="ml-2 h-4 w-4" />
				</a>
			</div>
		</div>
	);
};

export default PricingPlan;
