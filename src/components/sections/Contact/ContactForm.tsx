import { ArrowRight } from 'lucide-react';
import type React from 'react';
import { useState } from 'react';

const ContactForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// In a real app, this would send the data to a server
		console.log({ name, email, message });
		// Simulate submission success
		// Reset form
		setName('');
		setEmail('');
		setMessage('');
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			<div>
				<label className="mb-2 block font-medium text-sm" htmlFor="name">
					Name
				</label>
				<input
					id="name"
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="w-full rounded-lg border border-border bg-white/50 px-4 py-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
					placeholder="Your name"
					required
				/>
			</div>

			<div>
				<label className="mb-2 block font-medium text-sm" htmlFor="email">
					Email
				</label>
				<input
					id="email"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="w-full rounded-lg border border-border bg-white/50 px-4 py-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
					placeholder="Your email"
					required
				/>
			</div>

			<div>
				<label className="mb-2 block font-medium text-sm" htmlFor="message">
					Message
				</label>
				<textarea
					id="message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					className="h-32 w-full rounded-lg border border-border bg-white/50 px-4 py-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
					placeholder="Your message"
					required
				/>
			</div>

			<button
				type="submit"
				className="flex w-full items-center justify-center rounded-lg bg-primary py-3 font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90"
			>
				Send Message
				<ArrowRight className="ml-2 h-4 w-4" />
			</button>
		</form>
	);
};

export default ContactForm;
