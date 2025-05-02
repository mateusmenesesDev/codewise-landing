import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import CodeWiseLogo from '../CodeWiseLogo';
import { Button } from '../ui/button';

const navigation = [
	{ name: 'Benefits', href: '#features' },
	{ name: 'How It Works', href: '#how-it-works' },
	{ name: 'Testimonials', href: '#testimonials' },
	{ name: 'Get Free Mentorship', href: '#cta' }
];

const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header>
			<nav className="fixed top-0 right-0 left-0 z-50 bg-white py-2 shadow-md">
				<div className="container mx-auto flex items-center justify-between px-4 md:px-6">
					<div className="flex items-center">
						<a href="#hero" className="font-bold text-2xl text-mentor-purple">
							<CodeWiseLogo />
						</a>
					</div>

					{/* Desktop Menu */}
					<div className="hidden items-center space-x-8 md:flex">
						<a
							href="#features"
							className="text-gray-700 transition-colors hover:text-mentor-purple"
						>
							Benefits
						</a>
						<a
							href="#how-it-works"
							className="text-gray-700 transition-colors hover:text-mentor-purple"
						>
							How It Works
						</a>
						<a
							href="#testimonials"
							className="text-gray-700 transition-colors hover:text-mentor-purple"
						>
							Testimonials
						</a>
						<Button
							onClick={() =>
								document
									.getElementById('cta')
									?.scrollIntoView({ behavior: 'smooth' })
							}
							className="bg-mentor-purple text-white hover:bg-opacity-90"
						>
							Get Free Mentorship
						</Button>
					</div>

					{/* Mobile Menu Button */}
					<div className="flex items-center md:hidden">
						<button
							type="button"
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							className="text-gray-700 hover:text-mentor-purple"
						>
							{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{mobileMenuOpen && (
					<div className="animate-fadeIn bg-white shadow-lg md:hidden">
						<div className="container mx-auto flex flex-col space-y-4 px-4 py-3">
							{navigation.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className="py-2 text-gray-700 transition-colors hover:text-mentor-purple"
									onClick={() => setMobileMenuOpen(false)}
								>
									{item.name}
								</a>
							))}
							<Button
								onClick={() => {
									document
										.getElementById('cta')
										?.scrollIntoView({ behavior: 'smooth' });
									setMobileMenuOpen(false);
								}}
								className="w-full bg-mentor-purple text-white hover:bg-opacity-90"
							>
								Get Free Mentorship
							</Button>
						</div>
					</div>
				)}
			</nav>
		</header>
	);
};

export default Header;
