import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { testimonials } from '../../../constants/testimonials';
import { TestimonialCard } from './TestimonialsCard';

const Testimonials = () => {
	const titleRef = useRef<HTMLDivElement>(null);
	const [currentSlide, setCurrentSlide] = useState(0);

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

	// For mobile scrolling
	const nextSlide = () => {
		setCurrentSlide((prev) =>
			prev === testimonials.length - 1 ? 0 : prev + 1
		);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) =>
			prev === 0 ? testimonials.length - 1 : prev - 1
		);
	};

	return (
		<section className="section-padding">
			<div className="container mx-auto">
				<div
					className="mx-auto mb-16 max-w-2xl translate-y-10 text-center opacity-0 transition-all duration-1000"
					ref={titleRef}
				>
					<div className="mb-3 font-medium text-primary">Success Stories</div>
					<h2 className="mb-6 font-bold text-3xl md:text-4xl">
						What Our Mentees Say
					</h2>
					<p className="text-muted-foreground">
						Don't just take our word for it. Here's what developers who have
						worked with our mentors have to say about their experience.
					</p>
				</div>

				{/* Desktop view */}
				<div className="hidden grid-cols-1 gap-6 md:grid md:grid-cols-3">
					{testimonials.map((testimonial) => (
						<TestimonialCard
							key={testimonial.author}
							quote={testimonial.quote}
							author={testimonial.author}
							role={testimonial.role}
							avatar={testimonial.avatar}
							rating={testimonial.rating}
							linkedinUrl={testimonial.linkedinUrl}
						/>
					))}
				</div>

				{/* Mobile view - carousel */}
				<div className="md:hidden">
					<div className="relative">
						<div className="overflow-hidden">
							<div
								className="flex transition-transform duration-300 ease-out"
								style={{ transform: `translateX(-${currentSlide * 100}%)` }}
							>
								{testimonials.map((testimonial) => (
									<div className="min-w-full px-4" key={testimonial.author}>
										<TestimonialCard
											quote={testimonial.quote}
											author={testimonial.author}
											role={testimonial.role}
											avatar={testimonial.avatar}
											rating={testimonial.rating}
											linkedinUrl={testimonial.linkedinUrl}
										/>
									</div>
								))}
							</div>
						</div>

						<div className="mt-6 flex justify-center space-x-4">
							<button
								type="button"
								onClick={prevSlide}
								className="glass flex h-10 w-10 items-center justify-center rounded-full"
								aria-label="Previous slide"
							>
								<ArrowLeft className="h-4 w-4" />
							</button>
							<button
								type="button"
								onClick={nextSlide}
								className="glass flex h-10 w-10 items-center justify-center rounded-full"
								aria-label="Next slide"
							>
								<ArrowRight className="h-4 w-4" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
