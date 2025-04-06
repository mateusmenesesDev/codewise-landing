export const plans = [
	{
		title: 'Starter',
		description: 'Perfect for beginners looking for guidance on fundamentals.',
		price: '$199.99',
		features: [
			'2 mock interviews per month',
			'1 mentor sessions per month',
			'Basic project reviews',
			'Learning resources'
		],
		delay: 0
	},
	{
		title: 'Professional',
		description:
			'Ideal for developers ready to accelerate their career growth.',
		price: '$300.99',
		promotionalPrice: '$250.99',
		features: [
			'4 mentor sessions per month',
			'Full project management',
			'Full interview preparation',
			'Full Software House experience',
			'In-depth project reviews',
			'Custom learning roadmap',
			'Resume & portfolio review'
		],
		recommended: true,
		delay: 100
	},
	{
		title: 'Expert',
		description: 'For those seeking intensive guidance to reach expert level.',
		price: '$349.99',
		features: [
			'All features from Professional plan',
			'10m daily sessions (weekly schedule)',
			'Architecture consultations',
			'Personalized career coaching',
			'Job placement assistance'
		],
		delay: 200
	}
];
