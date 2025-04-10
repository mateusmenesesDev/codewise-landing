import { CheckCircle } from 'lucide-react';
import { useState } from 'react';
import CalendlySchedule from '../../CalendlySchedule';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';

const CtaSection = () => {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		setTimeout(() => {
			setIsSubmitting(false);
			setIsSubmitted(true);
		}, 1000);
	};

	return (
		<section id="cta" className="bg-mentor-blue py-16 md:py-24">
			<div className="container mx-auto px-4 md:px-6">
				<div className="overflow-hidden rounded-2xl bg-white shadow-xl">
					<div className="flex flex-col md:flex-row">
						<div className="w-full bg-mentor-purple p-8 text-white md:w-1/2 md:p-12">
							<h2 className="mb-6 font-bold text-3xl">
								Apply For Your Free Mentorship Session
							</h2>
							<p className="mb-8 text-lg">
								Take the first step toward accelerating your growth. Our expert
								mentors are ready to share their knowledge and experience with
								you.
							</p>

							<div className="space-y-4">
								<div className="flex items-start space-x-3">
									<CheckCircle className="mt-0.5 h-6 w-6 text-white" />
									<p>
										30-minute personalized session with an expert in your field
									</p>
								</div>
								<div className="flex items-start space-x-3">
									<CheckCircle className="mt-0.5 h-6 w-6 text-white" />
									<p>Actionable advice tailored to your specific challenges</p>
								</div>
								<div className="flex items-start space-x-3">
									<CheckCircle className="mt-0.5 h-6 w-6 text-white" />
									<p>Zero obligation - no credit card required</p>
								</div>
								<div className="flex items-start space-x-3">
									<CheckCircle className="mt-0.5 h-6 w-6 text-white" />
									<p>Limited-time offer - spots are filling quickly</p>
								</div>
							</div>
						</div>

						<div className="w-full p-8 md:w-1/2 md:p-12">
							{!isSubmitted ? (
								<form onSubmit={handleSubmit} className="space-y-6">
									<div className="space-y-2">
										<label htmlFor="name" className="font-medium text-sm">
											Your Name
										</label>
										<Input
											id="name"
											type="text"
											value={name}
											onChange={(e) => setName(e.target.value)}
											placeholder="Enter your full name"
											required
											className="h-12"
										/>
									</div>

									<div className="space-y-2">
										<label htmlFor="email" className="font-medium text-sm">
											Email Address
										</label>
										<Input
											id="email"
											type="email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											placeholder="you@example.com"
											required
											className="h-12"
										/>
									</div>

									<Button
										type="submit"
										className="h-12 w-full bg-mentor-purple text-lg text-white hover:bg-opacity-90"
										disabled={isSubmitting}
									>
										{isSubmitting
											? 'Submitting...'
											: 'Secure Your Free Session'}
									</Button>

									<p className="mt-4 text-center text-gray-500 text-xs">
										By applying, you agree to our Terms of Service and Privacy
										Policy. We respect your privacy and will never share your
										information.
									</p>
								</form>
							) : (
								<div className="flex w-full flex-col items-center justify-center">
									<h2 className="mb-6 font-bold text-3xl">
										Application Received!
									</h2>
									<p className="mb-6 text-gray-600">
										Thank you for applying for our free mentorship program. Now,
										you just need to schedule a day and time for your session.
									</p>
									<CalendlySchedule />
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CtaSection;
