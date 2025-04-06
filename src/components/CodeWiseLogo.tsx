export default function CodeWiseLogo() {
	return (
		<div className="flex items-center gap-0.5">
			<svg
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				aria-label="CodeWise Logo"
			>
				<title>CodeWise Logo</title>
				<defs>
					<linearGradient
						id="diamondGradient1"
						x1="0%"
						y1="0%"
						x2="100%"
						y2="100%"
					>
						<stop
							offset="0%"
							style={{ stopColor: 'hsl(262.1, 83.3%, 57.8%)' }}
						/>
						<stop
							offset="100%"
							style={{ stopColor: 'hsl(262.1, 83.3%, 47.8%)' }}
						/>
					</linearGradient>
					<linearGradient
						id="diamondGradient2"
						x1="0%"
						y1="0%"
						x2="100%"
						y2="100%"
					>
						<stop offset="0%" style={{ stopColor: 'hsl(265, 85%, 65%)' }} />
						<stop offset="100%" style={{ stopColor: 'hsl(285, 90%, 65%)' }} />
					</linearGradient>
				</defs>

				<path d="M6 16L16 6L26 16L16 26Z" fill="url(#diamondGradient1)" />
				<path
					d="M12 16L22 6L32 16L22 26Z"
					fill="url(#diamondGradient2)"
					opacity="0.9"
				/>

				<g>
					<path
						d="M14 12L11 16L14 20M18 12L21 16L18 20"
						stroke="rgba(255,255,255,0.4)"
						stroke-width="1.5"
						stroke-linecap="round"
					/>
					<path
						d="M23 12L20 20M26 12L29 16L26 20"
						stroke="rgba(255,255,255,0.4)"
						stroke-width="1.5"
						strokeLinecap="round"
					/>
				</g>
			</svg>
			<span className="text-primary">Code</span>
			<span>Wise</span>
		</div>
	);
}
