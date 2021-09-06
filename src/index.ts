import axios from 'axios';
import { GetTokenErrorHandler, GetUserErrorHandler, RefreshTokenErrorHandler } from './error';

export async function getToken(code: string, clientId: string, clientSecret: string) {
	try {
		return (await axios.post('http://dauth.b1nd.com/api/token', {
			code,
			clientId,
			clientSecret
		})).data.data;
	} catch (err: any) {
		GetTokenErrorHandler(err.response.data.status);
	}
}

export async function refreshToken(refreshToken: string, clientId: string) {
	try {
		return (await axios.post("http://dauth.b1nd.com/api/token/refresh", {
			refreshToken,
			clientId
		})).data.data;
	} catch (err: any) {
		RefreshTokenErrorHandler(err.response.data.status);
	}
}

export async function getUser(accessToken: string) {
	try {
		return (await axios.get("http://open.dodam.b1nd.com/api/user", {
			headers: {
				'access-token': accessToken
			}
		})).data;
	} catch (err: any) {
		GetUserErrorHandler(err.response.data.status);
	}
}