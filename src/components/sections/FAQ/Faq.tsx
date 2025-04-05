import { HelpCircle } from 'lucide-react';
import { useEffect, useRef } from 'react';
import FAQItem from './FaqItem';
import { faqs } from '../../../constants/faqs';

const FAQ = () => {
	const titleRef = useRef<HTMLDivElement>(null);

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

	return (
		<section id="faq" className="section-padding">
			<div className="container mx-auto">
				<div
					className="mx-auto mb-16 max-w-2xl translate-y-10 text-center opacity-0 transition-all duration-1000"
					ref={titleRef}
				>
					<div className="mb-3 inline-flex items-center font-medium text-primary">
						<HelpCircle className="mr-2 h-4 w-4" />
						Frequently Asked Questions
					</div>
					<h2 className="mb-6 font-bold text-3xl md:text-4xl">
						Common Questions About Our Mentorship
					</h2>
					<p className="text-muted-foreground">
						Got questions? We've got answers. If you don't see what you're
						looking for, reach out to our team.
					</p>
				</div>

				<div className="mx-auto max-w-3xl">
					{faqs.map((faq, index) => (
						<FAQItem
							key={faq.question}
							question={faq.question}
							answer={faq.answer}
							delay={index * 100}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default FAQ;
