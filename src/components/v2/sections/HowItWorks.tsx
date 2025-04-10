import { Button } from '../../ui/button';

const steps = [
	{
		number: '01',
		title: 'Apply in 2 Minutes',
		description:
			'Fill out our simple form telling us about your goals and challenges.'
	},
	{
		number: '02',
		title: 'Get Matched',
		description:
			"We'll pair you with a mentor who has relevant experience in your field."
	},
	{
		number: '03',
		title: 'Schedule Session',
		description:
			'Choose a convenient time for your free 1-hour mentorship session.'
	},
	{
		number: '04',
		title: 'Transform Your Path',
		description:
			'Implement the guidance you receive and watch your progress accelerate.'
	}
];

const HowItWorks = () => {
	return (
		<section id="how-it-works" className="bg-gray-50 py-16 md:py-24">
			<div className="container mx-auto px-4 md:px-6">
				<div className="mb-16 text-center">
					<h2 className="mb-4 font-bold text-3xl md:text-4xl">
						How Free Mentorship Works
					</h2>
					<p className="mx-auto max-w-2xl text-gray-600 text-lg">
						Getting started is simple - we've designed a straightforward process
						to connect you with the right mentor quickly.
					</p>
				</div>

				<div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
					{steps.map((step, index) => (
						<div
							key={step.number}
							className="relative animate-slideUp rounded-lg bg-white p-6 shadow-md"
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<div className="absolute top-4 right-4 font-bold text-4xl text-mentor-purple/20">
								{step.number}
							</div>
							<h3 className="mt-6 mb-3 font-bold text-xl">{step.title}</h3>
							<p className="text-gray-600">{step.description}</p>
						</div>
					))}
				</div>

				<div className="mt-16 text-center">
					<a href="#cta">
						<Button className="bg-mentor-purple px-8 py-6 text-lg text-white hover:bg-opacity-90">
							Get Started Now
						</Button>
					</a>
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
