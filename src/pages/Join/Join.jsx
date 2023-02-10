import React from 'react';
import classNames from 'classnames/bind';
import styles from '@/pages/Join/Join.module.scss';
import AuthInput from '@/components/AuthInput';

const Join = () => {
	const cx = classNames.bind(styles);
	const joinHandler = (e) => {
		e.preventDefault();
		const form = document.getElementById('form');
		const formData = new FormData(form);
		formData.append('role', 'ROLE_USER');
		console.log(...formData);
	};
	return (
		<div className={cx('join-wrap')}>
			<form className={cx('join')} id="form">
				<div className={cx('join__title-box')}>
					<h1>Join</h1>
				</div>
				<div className={cx('join__form-box')}>
					<div className={cx('join__form-box__email-box')}>
						<AuthInput type="email" placeholder="이메일" name="userEmail" />
						<button>
							<span>
								중복
								<br />
								확인
							</span>
						</button>
					</div>
					<AuthInput type="password" placeholder="패스워드" name="password" />
					<AuthInput type="password" placeholder="패스워드 확인" />
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
