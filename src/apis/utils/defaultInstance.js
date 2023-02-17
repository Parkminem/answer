import axios from 'axios';
const defaultInstance = axios.create({ baseURL: 'http://210.99.35.26:7071', 'Content-Type': `application/json` });
defaultInstance.interceptors.request.use(
	function (config) {
		const accToken = localStorage.getItem('accToken');
		if (accToken) {
			const token = JSON.parse(accToken).token;
			if (token) {
				config.headers['Authorization'] = `Bearer ${token}`;
			}
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
		return Promise.reject(err);
		//액세스 토큰이 만료 된 경우, 여기서 저장된 리프레쉬 토큰을 이용해서 액세스 토큰 다시 받아서 로컬스토리지에 넣어줌...
		// if (err.respons?.data.status === 403) {
		//  switch (err.response.data.code) {
		//    case '코드네임':
		//    //코드 확인 후 상황에 따라 추가
		//  }
		// }
	},
);
export default defaultInstance;
