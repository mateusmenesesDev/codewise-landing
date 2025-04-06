import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navigation } from '../constants/navigation';

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 right-0 left-0 z-50 px-6 transition-all duration-500 md:px-8 ${
				isScrolled ? 'glass py-4' : 'py-6'
			}`}
		>
			<div className="container mx-auto flex items-center justify-between">
				<a
					href="#home"
					className="font-bold text-2xl tracking-tight transition-opacity duration-300 hover:opacity-80"
				>
					<span className="text-primary">Code</span>
					<span>Wise</span>
				</a>

				{/* Desktop Navigation */}
				<nav className="hidden items-center space-x-8 md:flex">
					{navigation.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="font-medium text-sm tracking-wide transition-all duration-300 hover:text-primary"
						>
							{item.name}
						</a>
					))}
					<a
						href="#free-mentorship"
						className="rounded-full bg-primary px-5 py-2.5 font-medium text-primary-foreground text-sm transition-all duration-300 hover:bg-primary/90 hover:shadow-md"
					>
						Get Started
					</a>
				</nav>

				{/* Mobile menu button */}
				<button
					type="button"
					className="p-2 md:hidden"
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					aria-label="Toggle menu"
				>
					{mobileMenuOpen ? (
						<X className="h-6 w-6" />
					) : (
						<Menu className="h-6 w-6" />
					)}
				</button>
			</div>

			{/* Mobile Navigation */}
			{mobileMenuOpen && (
				<div className='absolute top-full right-0 left-0 bg-secondary px-4 py-6 md:hidden'>
					<nav className="flex flex-col space-y-4">
						{navigation.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="px-2 py-2 font-medium text-sm transition-colors duration-300 hover:text-primary"
								onClick={() => setMobileMenuOpen(false)}
							>
								{item.name}
							</a>
						))}
						<button
							type="button"
							onClick={() => {
								setMobileMenuOpen(false);
								document
									.getElementById('free-mentorship')
									?.scrollIntoView({ behavior: 'smooth' });
							}}
							className="rounded-full bg-primary px-5 py-2.5 text-center font-medium text-primary-foreground text-sm transition-all duration-300 hover:bg-primary/90"
						>
							Get Started
						</button>
					</nav>
				</div>
			)}
		</header>
	);
};

export default Header;
