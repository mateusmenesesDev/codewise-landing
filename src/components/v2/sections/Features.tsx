import {
	CheckCircle,
	Clock,
	Gift,
	Target,
	TrendingUp,
	Users
} from 'lucide-react';

const features = [
	{
		icon: <Target className="h-10 w-10 text-mentor-purple" />,
		title: 'Personalized Guidance',
		description:
			'Get tailored advice specific to your goals and challenges from experienced professionals.'
	},
	{
		icon: <TrendingUp className="h-10 w-10 text-mentor-purple" />,
		title: 'Accelerated Growth',
		description:
			'Fast-track your development with insights that would normally take years to discover.'
	},
	{
		icon: <Users className="h-10 w-10 text-mentor-purple" />,
		title: 'Expand Your Network',
		description:
			'Connect with industry experts and build valuable professional relationships.'
	},
	{
		icon: <Clock className="h-10 w-10 text-mentor-purple" />,
		title: 'Save Valuable Time',
		description:
			'Avoid common pitfalls and overcome obstacles faster with expert guidance.'
	},
	{
		icon: <CheckCircle className="h-10 w-10 text-mentor-purple" />,
		title: 'Actionable Feedback',
		description:
			'Receive honest, constructive feedback that helps you improve immediately.'
	},
	{
		icon: <Gift className="h-10 w-10 text-mentor-purple" />,
		title: 'Completely Free',
		description:
			'No hidden fees or obligations - just pure value for your growth journey.'
	}
];

const Features = () => {
	return (
		<section id="features" className="bg-white py-16 md:py-24">
			<div className="container mx-auto px-4 md:px-6">
				<div className="mb-16 text-center">
					<h2 className="mb-4 font-bold text-3xl md:text-4xl">
						Why Choose Our Free Mentorship?
					</h2>
					<p className="mx-auto max-w-2xl text-gray-600 text-lg">
						Our mentors are committed to your success. Here's how our free
						program will benefit you:
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{features.map((feature, index) => (
						<div
							key={feature.title}
							className="animate-slideUp rounded-lg border border-gray-100 bg-white p-6 shadow-lg transition-shadow hover:shadow-xl"
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<div className="mb-4">{feature.icon}</div>
							<h3 className="mb-2 font-bold text-xl">{feature.title}</h3>
							<p className="text-gray-600">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
