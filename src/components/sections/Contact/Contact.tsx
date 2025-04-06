import type React from 'react';
import { useEffect, useRef, useState } from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
	const contactRef = useRef<HTMLDivElement>(null);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [submitted, setSubmitted] = useState(false);

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

		if (contactRef.current) {
			observer.observe(contactRef.current);
		}

		return () => {
			if (contactRef.current) {
				observer.unobserve(contactRef.current);
			}
		};
	}, []);

	const _handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// In a real app, this would send the data to a server
		console.log({ name, email, message });
		// Simulate submission success
		setSubmitted(true);
		// Reset form
		setName('');
		setEmail('');
		setMessage('');
	};

	return (
		<section id="contact" className="section-padding">
			<div className="container mx-auto">
				<div
					className="glass mx-auto max-w-5xl translate-y-10 rounded-2xl p-8 opacity-0 transition-all duration-1000 md:p-12 lg:p-16"
					ref={contactRef}
				>
					<div className="grid grid-cols-1 gap-12 md:grid-cols-2">
						<div>
							<div className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 font-medium text-primary text-sm">
								Let's Connect
							</div>
							<h2 className="mb-6 font-bold text-3xl">
								Ready to Start Your Mentorship Journey?
							</h2>
							<p className="mb-8 text-muted-foreground">
								Whether you have questions about our program or are ready to be
								matched with a mentor, we're here to help you take the next
								step.
							</p>

							<div className="flex items-start">
								<div className="mr-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-label="Chat icon"
									>
										<title>Chat icon</title>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
										/>
									</svg>
								</div>
								<div>
									<h3 className="mb-1 font-semibold">Live Chat</h3>
									<a
										href="https://www.linkedin.com/in/mateus-meneses/"
										target="_blank"
										rel="noopener noreferrer"
										className="text-primary hover:underline"
									>
										Start a conversation
									</a>
								</div>
							</div>
						</div>

						<div id="join">
							{submitted ? (
								<div className="flex h-full flex-col items-center justify-center text-center">
									<div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-10 w-10"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-label="Success checkmark"
										>
											<title>Success checkmark</title>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M5 13l4 4L19 7"
											/>
										</svg>
									</div>
									<h3 className="mb-2 font-bold text-2xl">Message Sent!</h3>
									<p className="mb-6 text-muted-foreground">
										Thank you for reaching out. We'll get back to you within 24
										hours.
									</p>
									<button
										type="button"
										onClick={() => setSubmitted(false)}
										className="font-medium text-primary hover:underline"
									>
										Send another message
									</button>
								</div>
							) : (
								<ContactForm />
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
