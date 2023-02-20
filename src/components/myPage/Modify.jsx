import React, { useState } from 'react';
import style from '@/components/myPage/Modify.module.scss';
import userApi from '@/apis/api/user';
import { regx } from '@/modules/reg';

export default function Modify() {
	const [password, setPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const code = window.localStorage.getItem('code');
	const email = window.localStorage.getItem('user_mail');
	const passwordHandler = (e) => {
		setPassword(e.target.value);
	};
	const newPasswordHandler = (e) => {
		setNewPassword(e.target.value);
	};

	/**
	 * 비밀번호 수정
	 * @author sohee
	 */
	const submitHandler = async () => {
		if (password === newPassword) {
			if (password.length === 0 || newPassword.length === 0) alert('비밀번호를 입력해주세요');
			else if (!regx.passwordValid(password)) alert('비밀번호는 영문, 숫자, 특수문자 포함 8 ~ 32자까지 입니다.');
			else {
				const userInfo = {
					userEmail: email,
					password,
				};
				await userApi
					.getEditUserInfo(code, userInfo)
					.then((res) => {
						console.log(res);
					})
					.catch((err) => {
						console.log(err);
					});
			}
		} else alert('비밀번호가 일치하지 않습니다.');
	};

	const enterSubmit = (e) => {
		if (e.keyCode === 13) submitHandler();
	};

	return (
		<div className={style.modify}>
			<div className={style.top_bar}>회원 정보</div>
			<div className={style.content}>
				<div className={style.content_box}>
					<h1 className={style.title}>회원 정보 수정</h1>
					<form>
						<input type="text" placeholder={email} readOnly />
						<input type="password" name="new-password" placeholder="비밀번호" onChange={passwordHandler} />
						<input
							type="password"
							name="new-password"
							placeholder="비밀번호 확인"
							onChange={newPasswordHandler}
							onKeyDown={enterSubmit}
						/>
					</form>
					<button onClick={submitHandler}>회원 정보 수정</button>
				</div>
			</div>
		</div>
	);
}
