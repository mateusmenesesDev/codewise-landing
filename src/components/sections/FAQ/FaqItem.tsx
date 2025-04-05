import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger
} from '../../ui/collapsible';

interface FAQItemProps {
	question: string;
	answer: string;
	delay: number;
}

const FAQItem = ({ question, answer, delay }: FAQItemProps) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const itemRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setTimeout(() => {
						entry.target.classList.add('opacity-100', 'translate-y-0');
						entry.target.classList.remove('opacity-0', 'translate-y-10');
					}, delay);
					observer.unobserve(entry.target);
				}
			},
			{ threshold: 0.1 }
		);

		if (itemRef.current) {
			observer.observe(itemRef.current);
		}

		return () => {
			if (itemRef.current) {
				observer.unobserve(itemRef.current);
			}
		};
	}, [delay]);

	return (
		<div
			ref={itemRef}
			className="translate-y-10 opacity-0 transition-all duration-700"
		>
			<Collapsible
				open={isOpen}
				onOpenChange={setIsOpen}
				className="mb-4 w-full overflow-hidden rounded-xl border border-border/40"
			>
				<CollapsibleTrigger className="flex w-full items-center justify-between bg-secondary/30 p-5 text-left transition-colors hover:bg-secondary/50">
					<span className="font-medium text-lg">{question}</span>
					{isOpen ? (
						<ChevronUp className="h-5 w-5 text-primary" />
					) : (
						<ChevronDown className="h-5 w-5 text-primary" />
					)}
				</CollapsibleTrigger>
				<CollapsibleContent className="bg-white/5 p-5">
					<p className="text-muted-foreground">{answer}</p>
				</CollapsibleContent>
			</Collapsible>
		</div>
	);
};

export default FAQItem;
