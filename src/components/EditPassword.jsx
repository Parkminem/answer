import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useRecoilValue } from 'recoil';
import styles from '@/components/EditPassword.module.scss';
import AuthInput from '@/components/AuthInput';
import userApi from '@/apis/api/user';
import { userEmailState } from '@/store/auth';
import { regx } from '@/modules/reg';

const EditPassword = () => {
	const cx = classNames.bind(styles);
	const navigate = useNavigate();
	const [newPassword, setNewPassword] = useState('');
	const [checkPassword, setCheckPassword] = useState('');
	const email = useRecoilValue(userEmailState);

	const newPasswordHandler = (e) => {
		setNewPassword(e.target.value);
	};
	const checkPasswordHandler = (e) => {
		setCheckPassword(e.target.value);
	};
	const submitHandler = async (e) => {
		e.preventDefault();
		if (newPassword.length === 0 || checkPassword.length === 0) {
			alert('새로운 비밀번호를 입력해주세요');
		} else {
			if (newPassword !== checkPassword) {
				alert('비밀번호가 일치하지 않습니다.');
			} else if (!regx.passwordValid(newPassword)) {
				alert('비밀번호는 영문, 숫자, 특수문자 포함 8 ~ 32자까지 입니다.');
			} else {
				const token = await (await userApi.getAccessToken(email)).data.body.token;
				window.localStorage.setItem('user', token);
				const userInfo = {
					userEmail: email,
					password: newPassword,
				};
				userApi
					.getEditUserInfo(email, userInfo)
					.then((res) => {
						navigate('/login');
						window.localStorage.removeItem('user');
					})
					.catch((err) => console.log(err));
			}
		}
	};
	return (
		<>
			<div className={cx('find__title-box')}>
				<h1>비밀번호 재설정</h1>
			</div>
			<form className={cx('find__form-box')} onSubmit={submitHandler}>
				<div className={cx('find__form-box__pw-box')}>
					<AuthInput type="password" placeholder="새로운 비밀번호" onChange={newPasswordHandler} />
					<AuthInput type="password" placeholder="비밀번호 확인" onChange={checkPasswordHandler} />
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
