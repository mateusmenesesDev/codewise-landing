import { useEffect, useRef } from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '../../ui/card';

interface ProjectCardProps {
	title: string;
	description: string;
	image: string;
	tags: string[];
	githubUrl: string;
	liveUrl: string;
	delay: number;
}

export const ProjectCard = ({
	title,
	description,
	image,
	tags,
	delay
}: ProjectCardProps) => {
	const cardRef = useRef<HTMLDivElement>(null);

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

		if (cardRef.current) {
			observer.observe(cardRef.current);
		}

		return () => {
			if (cardRef.current) {
				observer.unobserve(cardRef.current);
			}
		};
	}, [delay]);

	return (
		<Card
			className="translate-y-10 overflow-hidden border-border/50 opacity-0 transition-all duration-1000 hover:shadow-lg"
			ref={cardRef}
		>
			<div className="relative h-48 overflow-hidden">
				<img
					src={image}
					alt={title}
					className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
					loading="lazy"
				/>
			</div>
			<CardHeader className="p-4">
				<CardTitle className="text-xl">{title}</CardTitle>
				<div className="mt-2 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<span
							key={tag}
							className="rounded-full bg-primary/10 px-2 py-1 text-primary text-xs"
						>
							{tag}
						</span>
					))}
				</div>
			</CardHeader>
			<CardContent className="p-4 pt-0">
				<CardDescription className="text-muted-foreground">
					{description}
				</CardDescription>
			</CardContent>
			{/* TODO: Add link to projects page */}
			{/* <CardFooter className="flex justify-between p-4 pt-0">
				<a
					href={githubUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center text-muted-foreground text-sm transition-colors hover:text-primary"
				>
					<Github className="mr-1 h-4 w-4" />
					View Code
				</a>
				<a
					href={liveUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center font-medium text-primary text-sm"
				>
					Live Demo
					<ExternalLink className="ml-1 h-4 w-4" />
				</a>
			</CardFooter> */}
		</Card>
	);
};
