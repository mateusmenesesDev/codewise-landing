import { ActionError, defineAction } from 'astro:actions';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
	send: defineAction({
		accept: 'form',
		handler: async (formData) => {
			const { error } = await resend.emails.send({
				from: 'Code Wise <mateus@mentoriafullstack.com>',
				to: 'mateusmenesesdev@gmail.com',
				subject: 'Code Wise - New Lead',
				html: `<p>Name: ${formData.get('name')}</p>
				<p>Email: ${formData.get('email')}</p>
				<p>Message: ${formData.get('message')}</p>
				<p>Linkedin: ${formData.get('linkedin')}</p>
				<p>Github: ${formData.get('github')}</p>
				<p>Time as developer: ${formData.get('timeAsDeveloper')}</p>
				<p>Plan: ${formData.get('plan')}</p>
				`
			});

			if (error) {
				console.log(error);
				throw new ActionError({
					code: 'BAD_REQUEST',
					message: error.message
				});
			}

			return {
				success: true,
				message: 'Email sent successfully'
			};
		}
	})
};
