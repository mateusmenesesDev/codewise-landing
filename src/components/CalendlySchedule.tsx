export default function CalendlySchedule() {
	return (
		<>
			<div
				className="calendly-inline-widget"
				data-url="https://calendly.com/mateusmenesesdev/free-mentorship-facebook?hide_event_type_details=1"
				style={{ minWidth: '320px', height: '700px' }}
			/>
			<script
				type="text/javascript"
				src="https://assets.calendly.com/assets/external/widget.js"
				async
			/>
		</>
	);
}
