import { ArrowRight } from 'lucide-react';

const Hero = () => {
	return (
		<section
			id="home"
			className="section-padding relative flex min-h-screen items-center justify-center pt-32 pb-16"
		>
			<div className="absolute inset-0 overflow-hidden">
				<div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 h-[600px] w-[600px] rounded-full bg-primary/10 opacity-70 blur-3xl" />
				<div className="absolute top-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-accent/20 opacity-60 blur-3xl" />
			</div>

			<div className="container relative z-10 mx-auto">
				<div className="mx-auto max-w-4xl space-y-6 text-center">
					<div className="mb-4 inline-block animate-fade-in rounded-full bg-primary/10 px-4 py-1.5 font-medium text-primary text-sm">
						Elevate Your Full Stack Journey
					</div>

					<h1 className="animate-slide-up font-bold text-4xl tracking-tight md:text-6xl lg:text-7xl">
						Expert Guidance for{' '}
						<span className="relative text-primary">
							Full Stack Developers
							<svg
								className="-bottom-2 absolute left-0 w-full"
								viewBox="0 0 300 10"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<title>Decorative underline</title>
								<path
									d="M3 8.5C55 3 125 3 297 8.5"
									stroke="currentColor"
									strokeWidth="5"
									strokeLinecap="round"
									fill="none"
									className="text-primary/30"
								/>
							</svg>
						</span>
					</h1>

					<p className="mx-auto mt-6 max-w-2xl animate-fade-in text-lg text-muted-foreground md:text-xl">
						Connect with top industry mentors who'll guide you through the
						complexities of modern web development and help you reach your
						career goals.
					</p>

					<div className="mt-10 flex animate-fade-in flex-col justify-center gap-4 sm:flex-row">
						<a
							href="#free-mentorship"
							className="flex items-center justify-center rounded-full bg-primary px-8 py-3.5 font-medium text-primary-foreground text-sm transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
						>
							Start Your Journey
							<ArrowRight className="ml-2 h-4 w-4" />
						</a>
					</div>

					<p className="mt-4 animate-fade-in text-muted-foreground text-sm">
						No credit card required. You pay after getting the full month
						mentorship.
					</p>
				</div>

				<div className="glass mx-auto mt-16 max-w-4xl animate-scale-in rounded-2xl p-6">
					<div className="grid grid-cols-2 gap-8 md:grid-cols-4">
						{[
							{ number: '∞', label: 'Stacks in the market' },
							{ number: '100%', label: 'Personalized Learning' },
							{ number: '5/5', label: 'Average Rating' },
							{ number: '24/7', label: 'Support Access' }
						].map((stat) => (
							<div key={stat.number} className="text-center">
								<div className="font-bold text-3xl text-primary md:text-4xl">
									{stat.number}
								</div>
								<div className="mt-1 text-muted-foreground text-sm">
									{stat.label}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
