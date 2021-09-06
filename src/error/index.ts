import { AxiosError } from 'axios';

export const GetTokenErrorHandler = async (err: AxiosError) => {
	switch (err.response?.data.status) {
		case 400:
			throw new Error('검증오류');
		case 401:
			throw new Error('잘못된 clientSecret입니다');
		case 403:
			throw new Error("변조된 code입니다");
		case 410:
			throw new Error('토큰이 만료 되었습니다');
		case 500:
			throw new Error('Open API 서버 오류');
	}
}

export const RefreshTokenErrorHandler = async (err: AxiosError) => {
	switch (err.response?.status) {
		case 400:
			throw new Error('잘못된 토큰입니다');
		case 401:
			throw new Error('위조된 토큰입니다');
		case 404:
			throw new Error('찾을 수 없는 회원입니다');
		case 410:
			throw new Error('토큰이 만료 되었습니다');
		case 500:
			throw new Error('Open API 서버 오류');
	}
}

export const GetUserErrorHandler = async (err: AxiosError) => {
	switch (err.response?.status) {
		case 400:
			throw new Error('토큰이 전송되지 않았습니다');
		case 401:
			throw new Error('위조된 토큰입니다');
		case 403:
			throw new Error('유저를 찾을 수 없습니다');
		case 410:
			throw new Error('토큰이 만료 되었습니다');
		case 500:
			throw new Error('Open API 서버 오류');
	}
}
