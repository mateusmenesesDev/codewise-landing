import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { plans } from '../../../constants/plans';
import PricingPlan from './PricingPlan';

const Pricing = () => {
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
		<section id="pricing" className="section-padding bg-secondary/50">
			<div className="container mx-auto">
				<div
					className="mx-auto mb-16 max-w-2xl translate-y-10 text-center opacity-0 transition-all duration-1000"
					ref={titleRef}
				>
					<div className="mb-3 font-medium text-primary">Pricing Plans</div>
					<h2 className="mb-6 font-bold text-3xl md:text-4xl">
						Invest in Your Growth
					</h2>
					<p className="text-muted-foreground">
						Choose the mentorship plan that best fits your goals and budget. All
						plans include a 7-day satisfaction guarantee.
					</p>
				</div>

				<div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
					{plans.map((plan) => (
						<PricingPlan key={plan.title} {...plan} />
					))}
				</div>

				<div className="mt-16 text-center">
					<p className="mb-4 text-muted-foreground">
						Need a custom plan for your team or company?
					</p>
					<a
						href="#contact"
						className="inline-flex items-center font-medium text-primary hover:underline"
					>
						Contact us for enterprise pricing{' '}
						<ArrowRight className="ml-1 h-4 w-4" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Pricing;
