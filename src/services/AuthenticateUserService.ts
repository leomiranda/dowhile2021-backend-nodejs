import axios from 'axios';

/**
 * Receive code (string)
 * Recovery the github access_token
 * Recovery github user info
 * Verify if the user exist in DB
 * ---- YES = Token generate
 * ---- NO  = Create user in DB, token generate
 * Return token with user logged in info
 */

interface IAccessTokenResponse {
	access_token: string;
}

interface IUserResponse {
	avatar_url: string;
	login: string;
	id: number;
	name: string;
}

export class AuthenticateUserService {
	async execute(code: string) {
		const url = 'https://github.com/login/oauth/access_token';

		const { data: accessTokenResponse } =
			await axios.post<IAccessTokenResponse>(url, null, {
				params: {
					client_id: process.env.GITHUB_CLIENT_ID,
					client_secret: process.env.GITHUB_CLIENT_SECRET,
					code,
				},
				headers: {
					Accept: 'application/json',
				},
			});

		const { data } = await axios.get<IUserResponse>(
			'https://api.github.com/user',
			{
				headers: {
					authorization: `Bearer ${accessTokenResponse.access_token}`,
				},
			}
		);

		return data;
	}
}
