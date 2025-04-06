import { Linkedin, Quote, Star } from 'lucide-react';

interface TestimonialProps {
	quote: string;
	author: string;
	role: string;
	avatar: string;
	rating: number;
	linkedinUrl: string;
}

export const TestimonialCard = ({
	quote,
	author,
	role,
	rating,
	linkedinUrl
}: TestimonialProps) => {
	return (
		<div className="glass relative flex h-full flex-col rounded-2xl p-8">
			<div className="absolute top-6 right-8 text-primary/30">
				<Quote className="h-16 w-16" />
			</div>
			<div className="mb-6 flex space-x-1">
				{Array.from({ length: 5 }).map((_, i) => (
					<Star
						key={`${i}-${rating}`}
						className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
					/>
				))}
			</div>
			<p className="relative z-10 mb-8 flex-grow text-lg">{quote}</p>
			<div className="mt-auto flex items-center">
				<div>
					<div className="flex items-center font-semibold">
						{author}
						<a
							href={linkedinUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="ml-2 text-primary transition-colors hover:text-primary/80"
							aria-label={`${author}'s LinkedIn profile`}
						>
							<Linkedin className="h-4 w-4" />
						</a>
					</div>
					<div className="text-muted-foreground text-sm">{role}</div>
				</div>
			</div>
		</div>
	);
};
