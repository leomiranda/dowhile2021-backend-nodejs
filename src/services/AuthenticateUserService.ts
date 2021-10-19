/**
 * Receive code (string)
 * Recovery the github access_token
 * Verify if the user exist in DB
 * ---- YES = Token generate
 * ---- NO  = Create user in DB, token generate
 * Return token with user logged in info
 */

export class AuthenticateUserService {
	async execute(code: string) {}
}
