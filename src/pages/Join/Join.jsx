import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from '@/pages/Join/Join.module.scss';
import AuthInput from '@/components/AuthInput';
import userApi from '@/apis/api/user';

const Join = () => {
	const cx = classNames.bind(styles);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [pwCheck, setPwCheck] = useState('');

	/**
	 * 회원가입 api 전송하기 전에 검증을 위해 value값을 받아놓음
	 * @param e(AuthInput 안의 input의 value)
	 * @author sohee
	 */
	const emailHandler = (e) => {
		setEmail(e.target.value);
	};
	const passwordHandler = (e) => {
		setPassword(e.target.value);
	};
	const pwCheckHandler = (e) => {
		setPwCheck(e.target.value);
	};

	/**
	 * 회원 가입
	 * @author sohee
	 */
	const joinHandler = (e) => {
		e.preventDefault();

		// const form = document.getElementById('form');
		// const formData = new FormData(form);
		// formData.append('role', 'ROLE_USER');
		// console.log(...formData);

		// userApi.getSignUp(formData).then((res) => {});
	};

	//중복 확인 함수... api가 없음(유저 목록 조회api가 있는데 이건 모든 유저 목록을 받아오는 듯..?)

	return (
		<div className={cx('join-wrap')}>
			<form className={cx('join')} id="form" onSubmit={joinHandler}>
				<div className={cx('join__title-box')}>
					<h1>Join</h1>
				</div>
				<div className={cx('join__form-box')}>
					<div className={cx('join__form-box__email-box')}>
						<AuthInput type="email" placeholder="이메일" name="userEmail" onChange={emailHandler} />
						<button>
							<span>
								중복
								<br />
								확인
							</span>
						</button>
					</div>
					<AuthInput type="password" placeholder="패스워드" name="password" onChange={passwordHandler} />
					<AuthInput type="password" placeholder="패스워드 확인" onChange={pwCheckHandler} />
					<div className={cx('join__form-box__btn-box')}>
						<button onClick={joinHandler}>
							<span>회원가입</span>
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Join;
