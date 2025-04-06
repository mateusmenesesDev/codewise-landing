import { actions } from 'astro:actions';
import { ArrowRight, Check, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
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
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

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

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);

		const formData = new FormData(e.currentTarget);
		formData.append('plan', title);

		try {
			const response = await actions.send(formData);
			const { data } = response;

			if (data?.success) {
				setIsSubmitted(true);
			}
		} catch (error) {
			console.error('Error submitting form:', error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
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

					<button
						type="button"
						onClick={() => setIsDialogOpen(true)}
						className={`flex w-full items-center justify-center rounded-xl py-3 font-medium text-sm transition-all duration-300 ${
							recommended
								? 'bg-primary-foreground text-primary hover:bg-primary-foreground/90'
								: 'bg-primary text-primary-foreground hover:bg-primary/90'
						}`}
					>
						Get Started
						<ArrowRight className="ml-2 h-4 w-4" />
					</button>
				</div>
			</div>

			{/* Dialog */}
			{isDialogOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
					<div className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-6">
						<button
							type="button"
							onClick={() => setIsDialogOpen(false)}
							className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
							aria-label="Close dialog"
						>
							<X className="h-5 w-5" />
						</button>

						{!isSubmitted ? (
							<>
								<h3 className="mb-2 font-bold text-xl">Join {title}</h3>
								<p className="mb-6 text-muted-foreground">
									Fill out the form below to get started with your mentorship
									journey.
								</p>

								<form onSubmit={handleSubmit} className="space-y-4">
									<div>
										<label
											className="mb-1 block font-medium text-sm"
											htmlFor="name"
										>
											Name
										</label>
										<input
											id="name"
											name="name"
											type="text"
											className="w-full rounded-lg border border-border bg-white/50 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
											required
										/>
									</div>

									<div>
										<label
											className="mb-1 block font-medium text-sm"
											htmlFor="email"
										>
											Email
										</label>
										<input
											id="email"
											name="email"
											type="email"
											className="w-full rounded-lg border border-border bg-white/50 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
											required
										/>
									</div>

									<div>
										<label
											className="mb-1 block font-medium text-sm"
											htmlFor="linkedin"
										>
											LinkedIn Profile (Optional)
										</label>
										<input
											id="linkedin"
											name="linkedin"
											type="url"
											className="w-full rounded-lg border border-border bg-white/50 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
											placeholder="https://linkedin.com/in/your-profile"
										/>
									</div>

									<div>
										<label
											className="mb-1 block font-medium text-sm"
											htmlFor="github"
										>
											GitHub Profile (Optional)
										</label>
										<input
											id="github"
											name="github"
											type="url"
											className="w-full rounded-lg border border-border bg-white/50 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
											placeholder="https://github.com/your-username"
										/>
									</div>

									<div>
										<label
											className="mb-1 block font-medium text-sm"
											htmlFor="timeAsDeveloper"
										>
											Time as Developer
										</label>
										<select
											id="timeAsDeveloper"
											name="timeAsDeveloper"
											className="w-full rounded-lg border border-border bg-white/50 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
											required
										>
											<option value="">Select an option</option>
											<option value="Less than 1 year">Less than 1 year</option>
											<option value="1-2 years">1-2 years</option>
											<option value="2-3 years">2-3 years</option>
											<option value="3-5 years">3-5 years</option>
											<option value="5+ years">5+ years</option>
										</select>
									</div>

									<div>
										<label
											className="mb-1 block font-medium text-sm"
											htmlFor="message"
										>
											Message (Optional)
										</label>
										<textarea
											id="message"
											name="message"
											className="h-24 w-full rounded-lg border border-border bg-white/50 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
											placeholder="Tell us about your goals and what you'd like to achieve"
										/>
									</div>

									<button
										type="submit"
										disabled={isLoading}
										className="flex w-full items-center justify-center rounded-lg bg-primary py-3 font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 disabled:opacity-70"
									>
										{isLoading ? (
											<>
												<span className="mr-2">Sending...</span>
												<div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
											</>
										) : (
											<>
												<span>Submit</span>
												<ArrowRight className="ml-2 h-4 w-4" />
											</>
										)}
									</button>
								</form>
							</>
						) : (
							<div className="text-center">
								<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-label="Success checkmark"
									>
										<title>Success checkmark</title>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
								</div>
								<h3 className="mb-2 font-bold text-xl">
									Application Completed!
								</h3>
								<p className="mb-6 text-muted-foreground">
									Your application has been completed, please schedule your
									first free mentorship.
								</p>
								<a
									href="https://calendly.com/mateusppa10/free-mentorship"
									target="_blank"
									rel="noopener noreferrer"
									className="flex w-full items-center justify-center rounded-lg bg-primary py-3 font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90"
								>
									Schedule Free Mentorship
									<ArrowRight className="ml-2 h-4 w-4" />
								</a>
							</div>
						)}
					</div>
				</div>
			)}
		</>
	);
};

export default PricingPlan;
