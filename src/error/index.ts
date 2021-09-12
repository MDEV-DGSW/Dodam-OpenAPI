import { AxiosError } from 'axios';
import { APIError } from '../types';

export const GetTokenErrorHandler = async (err: AxiosError) => {
	switch (err.response?.data.status) {
		case 400:
			throw new APIError(400, '검증오류');
		case 401:
			throw new APIError(401, '잘못된 clientSecret입니다');
		case 403:
			throw new APIError(403, "변조된 code입니다");
		case 410:
			throw new APIError(410, '토큰이 만료 되었습니다');
		case 500:
			throw new APIError(500, 'Open API 서버 오류');
	}
}

export const RefreshTokenErrorHandler = async (err: AxiosError) => {
	switch (err.response?.status) {
		case 400:
			throw new APIError(400, '잘못된 토큰입니다');
		case 401:
			throw new APIError(401, '위조된 토큰입니다');
		case 404:
			throw new APIError(404, '찾을 수 없는 회원입니다');
		case 410:
			throw new APIError(410, '토큰이 만료 되었습니다');
		case 500:
			throw new APIError(500, 'Open API 서버 오류');
	}
}

export const GetUserErrorHandler = async (err: AxiosError) => {
	switch (err.response?.status) {
		case 400:
			throw new APIError(400, '토큰이 전송되지 않았습니다');
		case 401:
			throw new APIError(401, '위조된 토큰입니다');
		case 403:
			throw new APIError(403, '유저를 찾을 수 없습니다');
		case 410:
			throw new APIError(410, '토큰이 만료 되었습니다');
		case 500:
			throw new APIError(500, 'Open API 서버 오류');
	}
}
