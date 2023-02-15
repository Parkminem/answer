import React from 'react';
import classNames from 'classnames/bind';
import styles from '@/components/EditPassword.module.scss';
import AuthInput from './AuthInput';

const EditPassword = () => {
	const cx = classNames.bind(styles);
	const newPasswordHandler = (e) => {};
	const checkPasswordHandler = (e) => {};
	const submitHandler = (e) => {};
	return (
		<>
			<div className={cx('find__title-box')}>
				<h1>비밀번호 재설정</h1>
			</div>
			<form className={cx('find__form-box')} onSubmit={submitHandler}>
				<div className={cx('find__form-box__pw-box')}>
					<AuthInput type="text" placeholder="새로운 비밀번호" onChange={newPasswordHandler} />
					<AuthInput type="text" placeholder="비밀번호 확인" onChange={checkPasswordHandler} />
				</div>
				<div className={cx('find__form-box__btn-box')}>
					<button onClick={submitHandler}>
						<span>비밀번호 재설정</span>
					</button>
				</div>
			</form>
		</>
	);
};

export default EditPassword;
