import axios from 'axios';
import { GetTokenErrorHandler, GetUserErrorHandler, RefreshTokenErrorHandler } from './error';
import { EndPoints } from './enum/EndPoints';
import { GetTokenResponse, RefreshTokenResponse, GetUserResponse } from './types';

export class DodamAPI {
	static async getToken(code: string, client_id: string, client_secret: string): Promise<GetTokenResponse> {
		try {
			return (await axios.post(`${EndPoints.DAUTH}`, {
				code,
				client_id,
				client_secret
			})).data.data;
		} catch (err) {
			if (axios.isAxiosError(err)) {
				GetTokenErrorHandler(err);
			}
	
			throw err;
		}
	}

	static async refreshToken(refresh_token: string, client_id: string): Promise<RefreshTokenResponse> {
		try {
			return (await axios.post(`${EndPoints.DAUTH}/refresh`, {
				refresh_token,
				client_id
			})).data.data;
		} catch (err) {
			if (axios.isAxiosError(err)) {
				RefreshTokenErrorHandler(err);
			}
	
			throw err;
		}
	}

	static async getUser(access_token: string): Promise<GetUserResponse> {
		try {
			return (await axios.get(`${EndPoints.OPENAPI}`, {
				headers: {
					'Authorization': `Bearer ${access_token}`
				}
			})).data.data;
		} catch (err) {
			if (axios.isAxiosError(err)) {
				GetUserErrorHandler(err)
			}
	
			throw err;
		}
	}
}
