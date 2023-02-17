import React, { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from '@/pages/Login/Login.module.scss';
import AuthCard from '@/components/UI/AuthCard';
import AuthInput from '@/components/AuthInput';
import authApi from '@/apis/api/auth';

const Login = () => {
	const cx = classNames.bind(styles);
	const idRef = useRef();
	const pwRef = useRef();
	useEffect(() => {
		idRef.current.focus();
	}, []);

	/**
	 * 로그인
	 * @author sohee
	 */
	const loginHandler = async (e) => {
		e.preventDefault();
		const form = document.getElementById('form');
		const formData = new FormData(form);
		await authApi
			.getLogin(formData)
			.then((res) => {
				//res 받으면 로그인 된 상태로 메인으로 가야함(로컬스토리지에 받은 토큰 2개 저장)
				//비번이 틀리거나 이메일이 틀린 경우 로직.. res 확인해야함
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<AuthCard>
			<div className={cx('login-wrap')}>
				<form className={cx('login')} id="form" onSubmit={loginHandler}>
					<div className={cx('login__form-box')}>
						<AuthInput type="email" name="email" ref={idRef} placeholder="이메일" />
						<AuthInput type="password" name="password" ref={pwRef} placeholder="비밀번호" />
						<div className={cx('login__form-box__btn-box')}>
							<button onClick={loginHandler}>
								<span>이메일</span>
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
