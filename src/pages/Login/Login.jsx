import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from '@/pages/Login/Login.module.scss';
import AuthInput from '@/components/AuthInput';

const Login = () => {
	const cx = classNames.bind(styles);
	return (
		<div className={cx('login-wrap')}>
			<div className={cx('login')}>
				<div className={cx('login__title-box')}>
					<h1>Login</h1>
				</div>
				<div className={cx('login__form-box')}>
					<AuthInput type="email" placeholder="이메일" />
					<AuthInput type="password" placeholder="패스워드" />
					<div className={cx('login__form-box__btn-box')}>
						<button>
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
			</div>
		</div>
	);
};

export default Login;
