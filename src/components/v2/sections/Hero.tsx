import { ArrowRight } from 'lucide-react';
import { Button } from '../../ui/button';

const Hero = () => {
	return (
		<section
			className="bg-gradient-to-b from-mentor-lightBlue/30 to-white pt-28 pb-16 md:pt-32 md:pb-24"
			id="hero"
		>
			<div className="container mx-auto px-4 md:px-6">
				<div className="flex flex-col items-center md:flex-row">
					<div className="mb-10 w-full animate-fadeIn md:mb-0 md:w-1/2">
						<h1 className="mb-6 font-bold text-4xl leading-tight md:text-5xl lg:text-6xl">
							Accelerate Your Growth With{' '}
							<span className="text-mentor-purple">
								Free Professional Mentorship
							</span>
						</h1>
						<p className="mb-8 text-gray-700 text-lg md:max-w-xl md:text-xl">
							Connect with experienced mentors who are committed to helping you
							achieve your goals. Limited-time free sessions available now.
						</p>
						<div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
							<a href="#cta" className="flex items-center">
								<Button className="bg-mentor-purple px-8 py-6 text-lg text-white hover:bg-opacity-90">
									Start Your Free Mentorship{' '}
									<ArrowRight className="ml-2 h-5 w-5" />
								</Button>
							</a>

							<a href="#how-it-works">
								<Button
									variant="outline"
									className="border-mentor-purple px-8 py-6 text-lg text-mentor-purple hover:bg-mentor-purple/10"
								>
									How It Works
								</Button>
							</a>
						</div>
					</div>
					<div className="w-full animate-fadeIn delay-100 md:w-1/2">
						<div className="relative">
							<img
								src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
								alt="Mentorship Session"
								className="rounded-lg shadow-2xl"
							/>
							<div className="-bottom-6 -left-6 absolute rounded-lg bg-white p-4 shadow-lg">
								<div className="font-bold text-mentor-purple text-xl">
									100% Free
								</div>
								<div className="text-gray-600">Limited time offer</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
