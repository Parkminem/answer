import axios from 'axios';
import jwt_decode from 'jwt-decode';
import authApi from '@/apis/api/auth';

const defaultInstance = axios.create({ baseURL: 'http://210.99.35.26:7071', 'Content-Type': `application/json` });

const getRefreshToken = async () => {
	try {
		const {
			data: { body },
		} = await authApi.getRefresh();
		const decoded = await jwt_decode(body.token);
		localStorage.setItem('user', body.token);
		localStorage.setItem('code', decoded.code);
		localStorage.setItem('user_mail', decoded.sub);
		return body.token;
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
