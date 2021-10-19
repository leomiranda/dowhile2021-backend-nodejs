import axios from 'axios';

/**
 * Receive code (string)
 * Recovery the github access_token
 * Verify if the user exist in DB
 * ---- YES = Token generate
 * ---- NO  = Create user in DB, token generate
 * Return token with user logged in info
 */

export class AuthenticateUserService {
	async execute(code: string) {
		const url = 'https://github.com/login/oauth/access_token';

		const response = await axios.post(url, null, {
			params: {
				client_id: process.env.GITHUB_CLIENT_ID,
				client_secret: process.env.GITHUB_CLIENT_SECRET,
				code,
			},
			headers: {
				Accept: 'application/json',
			},
		});

		return response.data;
	}
}
