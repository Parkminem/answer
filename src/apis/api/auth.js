import defaultInstance from '@/apis/utils/defaultInstance';

/**
 * 로그인 api
 * @param {json}userInfo email, password
 * @returns header(code, message), body(...additionProp)
 * @author sohee
 */
function getLogin(userInfo) {
	return defaultInstance.post('/api/v1/login', userInfo);
}

/**
 * 리프레쉬 토큰으로 액세스 토큰 재발급 api
 * @returns header(code, message), body(...additionProp)
 * @author sohee
 */
function getRefresh() {
	return defaultInstance.get('/api/v1/refresh');
}

const authApi = {
	getLogin,
	getRefresh,
};

export default authApi;
