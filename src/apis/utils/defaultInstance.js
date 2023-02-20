import axios from 'axios';
import jwt_decode from 'jwt-decode';
import authApi from '@/apis/api/auth';

const defaultInstance = axios.create({ baseURL: 'http://210.99.35.26:7071', 'Content-Type': `application/json` });

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
	function (res) {
		return res;
	},
	function (err) {
		const token = localStorage.getItem('user');
		if (token) {
			if (err.response?.data.status === 401) {
				authApi
					.getRefresh()
					.then((res) => {
						const token = res.data.body.token;
						const decoded = jwt_decode(token);
						window.localStorage.setItem('user', token);
						window.localStorage.setItem('code', decoded.code);
						window.localStorage.setItem('user_mail', decoded.sub);
					})
					.catch((err) => {
						console.log(err);
					});
			} else {
				return Promise.reject(err);
			}
		} else {
			return Promise.reject(err);
		}
	},
);
export default defaultInstance;
