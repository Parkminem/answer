import axios from 'axios';
import jwt_decode from 'jwt-decode';
import authApi from '@/apis/api/auth';

const defaultInstance = axios.create({ baseURL: 'http://210.99.35.26:7071', 'Content-Type': `application/json` });

const getRefreshToken = async () => {
	try {
		const {
			data: { token },
		} = await authApi.getRefresh();
		const decoded = await jwt_decode(token);
		localStorage.setItem('user', token);
		localStorage.setItem('code', decoded.code);
		localStorage.setItem('user_mail', decoded.sub);
		return token;
	} catch (err) {
		if (err.response.header.code === 500) {
			localStorage.removeItem('user');
			localStorage.removeItem('code');
			localStorage.removeItem('user_mail');
			alert('로그아웃 되었습니다. 다시 로그인 해주세요.');
			window.location.href = '/';
		}
	}
};

defaultInstance.interceptors.request.use(
	function (config) {
		const token = localStorage.getItem('user');
		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`;
		}
		return config;
	},
	function (err) {
		return Promise.reject(err);
	},
);

defaultInstance.interceptors.response.use(
	(res) => res,
	async (err) => {
		const {
			config,
			response: { status },
		} = err;
		if (status !== 401) {
			return Promise.reject(err);
		}
		config.sent = true;
		const getAccessToken = await getRefreshToken();
		if (getAccessToken) {
			config.headers.Authorization = `Bearer ${getAccessToken}`;
		}
		return defaultInstance(config);
	},
);
export default defaultInstance;

// defaultInstance.interceptors.response.use(
// 	function (res) {
// 		return res;
// 	},
// 	function (err) {
// 		const { config } = err;
// 		const token = localStorage.getItem('user');
// 		if (token) {
// 			if (err.response?.data.status === 401) {
// 				authApi
// 					.getRefresh()
// 					.then((res) => {
// 						const token = res.data.body.token;
// 						const decoded = jwt_decode(token);
// 						window.localStorage.setItem('user', token);
// 						window.localStorage.setItem('code', decoded.code);
// 						window.localStorage.setItem('user_mail', decoded.sub);
// 					})
// 					.catch((err) => {
// 						if (err.response.header.code == 500) {
// 							window.localStorage.removeItem('user');
// 							window.localStorage.removeItem('code');
// 							window.localStorage.removeItem('user_mail');
// 							alert('로그아웃 되었습니다. 다시 로그인 해주세요.');
// 							window.location.href = '/';
// 						}
// 					});
// 			} else if (err.response?.header.code == 500) {
// 				window.localStorage.removeItem('user');
// 				window.localStorage.removeItem('code');
// 				window.localStorage.removeItem('user_mail');
// 				alert('로그아웃 되었습니다. 다시 로그인 해주세요.');
// 				window.location.href = '/';
// 			} else {
// 				return Promise.reject(err, '토큰 있음');
// 			}
// 		} else {
// 			//토큰이 없는 상황(로그인 X)
// 			return Promise.reject(err);
// 		}
// 		return defaultInstance;
// 	},
// );
