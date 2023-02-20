import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { history } from '@/router/history';
import styles from '@/pages/Login/Login.module.scss';
import AuthCard from '@/components/UI/AuthCard';
import AuthInput from '@/components/AuthInput';
import authApi from '@/apis/api/auth';
import { timerState, certificationNumberState, changPwState } from '@/store/auth';

const Login = () => {
	const cx = classNames.bind(styles);
	const navigate = useNavigate();
	const idRef = useRef();
	const pwRef = useRef();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const setCount = useSetRecoilState(timerState);
	const setCheckNum = useSetRecoilState(certificationNumberState);
	const [changePw, setChangePw] = useRecoilState(changPwState);

	useEffect(() => {
		idRef.current.focus();
	}, []);

	useEffect(() => {
		const listen = history.listen(
			(location) => {
				if (history.action === 'POP') {
					setChangePw(false);
					setCount(180);
					setCheckNum('');
					window.localStorage.removeItem('user');
				}
			},
			[history],
		);
		return () => listen();
	}, [history]);

	const emailHandler = (e) => {
		setEmail(e.target.value);
	};
	const passwordHandler = (e) => {
		setPassword(e.target.value);
	};

	/**
	 * 로그인
	 * @author sohee
	 */
	const loginHandler = async (e) => {
		e.preventDefault();
		const formData = {
			email,
			password,
		};
		await authApi
			.getLogin(formData)
			.then((res) => {
				const token = res.data.body.token;
				const decoded = jwt_decode(token);
				window.localStorage.setItem('user_mail', decoded.sub);
				window.localStorage.setItem('user', token);
				window.localStorage.setItem('code', decoded.code);
				navigate('/');
			})
			.catch((err) => {
				if (err.response.status === 401) {
					alert('이메일과 비밀번호를 확인해주세요.');
				}
			});
	};
	return (
		<AuthCard>
			<div className={cx('login-wrap')}>
				<form className={cx('login')} id="form" onSubmit={loginHandler}>
					<div className={cx('login__form-box')}>
						<AuthInput type="email" name="email" ref={idRef} placeholder="이메일" onChange={emailHandler} />
						<AuthInput
							type="password"
							name="password"
							ref={pwRef}
							placeholder="비밀번호"
							onChange={passwordHandler}
						/>
						<div className={cx('login__form-box__btn-box')}>
							<button onClick={loginHandler}>
								<span>로그인</span>
							</button>
						</div>
						<div className={cx('login__form-box__link-box')}>
							<Link to="/join">
								<span>회원가입</span>
							</Link>
							<Link to="/findpassword">
								<span>비밀번호 찾기</span>
							</Link>
						</div>
					</div>
				</form>
			</div>
		</AuthCard>
	);
};

export default Login;
