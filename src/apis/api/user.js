import defaultInstance from '@/apis/utils/defaultInstance';

/**
 * 특정 유저 조회 api
 * @param {string} email
 * @returns usercode, userEmail, regiDate
 * @author sohee
 */
function getUserCheck(email) {
	return defaultInstance.get(`/api/v1/users/${email}`);
}

/**
 * 유저 정보 수정 api
 * @param {string} email
 * @param {json}userInfo userEmail(string), password(string), role('ROLE_USER')
 * @returns userEmail, role, regiDate
 * @author sohee
 */
function getEditUserInfo(email, userInfo) {
	return defaultInstance.put(`/api/v1/users/${email}`, userInfo);
}

/**
 * 유저 탈퇴 api
 * @param {string} userCode
 * @returns userEmail, role, regiDate
 * @author sohee
 */
function getDeleteUser(userCode) {
	return defaultInstance.delete(`/api/v1/users/${userCode}`);
}

/**
 * 이메일 중복체크 api
 * @param {string} email
 * @returns boolean
 * @author sohee
 */
function getCheckEmail(email) {
	return defaultInstance.get(`/api/v1/users/email-duplication-check?email=${encodeURIComponent(email)}`);
}

/**
 * 회원가입 api
 * @param {json}userInfo userEmail(string), password(string), role('ROLE_USER')
 * @returns userEmail, role, regiDate
 * @author sohee
 */
function getSignUp(userInfo) {
	return defaultInstance.post('/api/v1/users', encodeURIComponent(JSON.stringify(userInfo)));
}

/**
 * 액세스 토큰 발급 api
 * 인증 코드 매칭이 완료되면, 임시 액세스 토큰을 발급받고 새로운 비밀번호로 변경하면 됨
 * @param {string} email
 * @returns header(code, message), body(...additionalProps)
 * @author sohee
 */
function getAccessToken(email) {
	return defaultInstance.get(`/api/v1/users/${email}/token`);
}

/**
 * 유저 이메일로 인증 코드 발급 api
 * 인증코드 어떻게 오는지 확인하고, 프론트에서 비교하면됨
 * 인증코드 안오면 api 만들어달라고 요청해야됨
 * @param {string} email
 * @returns header(code, message), body(...additionalProp)
 * @author sohee
 */
function getCheckAuthCode(email) {
	return defaultInstance.get(`/api/v1/users/auth-code?email=${email}`);
}

const userApi = {
	getUserCheck,
	getEditUserInfo,
	getDeleteUser,
	getCheckEmail,
	getSignUp,
	getAccessToken,
	getCheckAuthCode,
};

export default userApi;
