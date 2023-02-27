import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from '@/components/myPage/Modify.module.scss';
import userApi from '@/apis/api/user';
import { regx } from '@/modules/reg';
import mUserImg from '@/assets/images/mobile/common/mobile_user_img.png';
import mEditIcon from '@/assets/images/mobile/common/mobile_edit_icon.png';

export default function Modify() {
	const navigate = useNavigate();
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
						if (res.status === 201) {
							alert('비밀번호가 수정되었습니다.');
							navigate('/');
						}
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
					{/* 모바일 시 나오는 프로필 */}
					<div className={style.mobile_profile}>
						<div className={style.img_box}>
							<img src={mUserImg} alt="유저이미지" />
							<div className={style.edit_box}>
								<button>
									<img src={mEditIcon} alt="수정" />
								</button>
							</div>
						</div>
						<h1>
							<strong>김앤써</strong>님
						</h1>
					</div>
					{/* 여기까지 */}
					<div className={style.mobile_title}>
						<h1>회원 정보</h1>
					</div>
					<form>
						<div className={style.mobile_label}>
							<span>이메일</span>
							<sup>*</sup>
						</div>
						<input type="text" placeholder={email} readOnly className={style.email} />
						<div className={style.mobile_label}>
							<span>비밀번호</span>
						</div>
						<input type="password" name="new-password" placeholder="비밀번호" onChange={passwordHandler} />
						<input
							type="password"
							name="new-password"
							placeholder="비밀번호 확인"
							onChange={newPasswordHandler}
							onKeyDown={enterSubmit}
						/>
					</form>
					<div className={style.submitBtns}>
						<button className={style.submitBtn} onClick={submitHandler}>
							회원 정보 수정
						</button>
					</div>
				</div>
			</div>
			{/* 모바일 회원정보 수정버튼 */}
			<div className={style.mobile_btn}>
				<button onClick={submitHandler}>
					<span>회원정보 수정</span>
				</button>
			</div>
		</div>
	);
}
