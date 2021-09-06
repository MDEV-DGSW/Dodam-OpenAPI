import { logger } from '../lib/logger';

export const GetTokenErrorHandler = async (status: number) => {
	switch (status) {
		case 400:
			logger.error('검증오류');
			break;
		case 401:
			logger.error('잘못된 clientSecret입니다');
			break;
		case 403:
			logger.error('변조된 code 입니다');
			break;
		case 410:
			logger.error('토큰이 만료 되었습니다');
			break;
		case 500:
			logger.error('Open API 서버 오류');
			break;
	}
}

export const RefreshTokenErrorHandler = async (status: number) => {
	switch (status) {
		case 400:
			logger.error('잘못된 토큰입니다');
			break;
		case 401:
			logger.error('위조된 토큰입니다');
			break;
		case 404:
			logger.error('찾을 수 없는 회원입니다');
			break;
		case 410:
			logger.error('토큰이 만료 되었습니다');
			break;
		case 500:
			logger.error('Open API 서버 오류');
			break;
	}
}

export const GetUserErrorHandler = async (status: number) => {
	switch (status) {
		case 400:
			logger.error('토큰이 전송되지 않았습니다');
			break;
		case 401:
			logger.error('위조된 토큰입니다');
			break;
		case 403:
			logger.error('유저를 찾을 수 없습니다');
			break;
		case 410:
			logger.error('토큰이 만료 되었습니다');
			break;
		case 500:
			logger.error('Open API 서버 오류');
			break;
	}
}