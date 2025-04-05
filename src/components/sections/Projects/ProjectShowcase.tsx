import { useEffect, useRef, useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { projects } from '../../../constants/projects';

const ProjectShowcase = () => {
	const titleRef = useRef<HTMLDivElement>(null);
	const [_currentSlide, _setCurrentSlide] = useState(0);

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
		<section id="projects" className="section-padding bg-background">
			<div className="container mx-auto">
				<div
					className="mx-auto mb-16 max-w-2xl translate-y-10 text-center opacity-0 transition-all duration-1000"
					ref={titleRef}
				>
					<div className="mb-3 font-medium text-primary">Student Success</div>
					<h2 className="mb-6 font-bold text-3xl md:text-4xl">
						Projects Built With Our Mentorship
					</h2>
					<p className="text-muted-foreground">
						Browse through real projects our mentees have built with guidance
						from our experienced mentors. From web applications to complex
						architectures, see what you can achieve.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
					{projects.map((project, index) => (
						<ProjectCard
							key={project.title}
							title={project.title}
							description={project.description}
							image={project.image}
							tags={project.tags}
							githubUrl={project.githubUrl}
							liveUrl={project.liveUrl}
							delay={index * 100}
						/>
					))}
				</div>

				{/* TODO: Add link to projects page */}
				{/* <div className="mt-12 text-center">
					<a
						href="#projects"
						className="inline-flex items-center rounded-full bg-secondary px-6 py-3 font-medium text-secondary-foreground text-sm transition-all duration-300 hover:bg-secondary/70"
					>
						View All Projects
						<ArrowRight className="ml-2 h-4 w-4" />
					</a>
				</div> */}
			</div>
		</section>
	);
};

export default ProjectShowcase;
