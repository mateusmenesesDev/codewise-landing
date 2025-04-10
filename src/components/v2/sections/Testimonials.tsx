import { Star } from 'lucide-react';
import { testimonials } from '../../../constants/testimonials';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '../../ui/carousel';

const Testimonials = () => {
	return (
		<section id="testimonials" className="bg-white py-16 md:py-24">
			<div className="container mx-auto px-4 md:px-6">
				<div className="mb-16 text-center">
					<h2 className="mb-4 font-bold text-3xl md:text-4xl">
						Success Stories
					</h2>
					<p className="mx-auto max-w-2xl text-gray-600 text-lg">
						Hear from people who have transformed their careers with our free
						mentorship program.
					</p>
				</div>

				<Carousel className="mx-auto w-full max-w-5xl">
					<CarouselContent>
						{testimonials.map((testimonial) => (
							<CarouselItem
								key={testimonial.author}
								className="md:basis-1/2 lg:basis-1/2"
							>
								<div className="flex h-full flex-col rounded-lg bg-gray-50 p-6 md:p-8">
									<div className="mb-4 flex">
										{[...Array(5)].map((_, i) => (
											<Star
												key={`${testimonial.author}-${i}`}
												className="h-5 w-5 fill-mentor-purple text-mentor-purple"
											/>
										))}
									</div>
									<p className="mb-6 flex-grow text-gray-700 italic">
										"{testimonial.quote}"
									</p>
									<div className="flex items-center">
										<div>
											<h4 className="font-bold">{testimonial.author}</h4>
											<p className="text-gray-600 text-sm">
												{testimonial.role}
											</p>
										</div>
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="hidden md:flex" />
					<CarouselNext className="hidden md:flex" />
				</Carousel>
			</div>
		</section>
	);
};

export default Testimonials;
