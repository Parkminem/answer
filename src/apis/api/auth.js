import defaultInstance from '@/apis/utils/defaultInstance';

/**
 * 로그인 api
 * @param {json}userInfo email, password
 * @returns header(code, message), body(...additionProp)
 */
function getLogin(userInfo) {
	return defaultInstance.post('/api/v1/login', userInfo);
}
