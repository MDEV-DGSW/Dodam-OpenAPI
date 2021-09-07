import axios from 'axios';
import { GetTokenErrorHandler, GetUserErrorHandler, RefreshTokenErrorHandler } from './error';
import { EndPoints } from './enum/EndPoints';

export const getToken = async (code: string, clientId: string, clientSecret: string) => {
	try {
		return (await axios.post(`${EndPoints.DAUTH}`, {
			code,
			clientId,
			clientSecret
		})).data.data;
	} catch (err) {
		if (axios.isAxiosError(err)) {
			GetTokenErrorHandler(err);
		}
	}
}

export const refreshToken = async (refreshToken: string, clientId: string) => {
	try {
		return (await axios.post(`${EndPoints.DAUTH}/refresh`, {
			refreshToken,
			clientId
		})).data.data;
	} catch (err) {
		if (axios.isAxiosError(err)) {
			RefreshTokenErrorHandler(err);
		}
	}
}

export const getUser = async (accessToken: string) => {
	try {
		return (await axios.get(`${EndPoints.OPENAPI}`, {
			headers: {
				'access-token': accessToken
			}
		})).data.data;
	} catch (err) {
		if (axios.isAxiosError(err)) {
			GetUserErrorHandler(err)
		}
	}
}