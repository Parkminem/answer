import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styles from '@/components/FindPassword.module.scss';
import AuthInput from '@/components/AuthInput';
import AuthTimer from '@/components/AuthTimer';
import { regx } from '@/modules/reg';
import userApi from '@/apis/api/user';
import { timerState, certificationNumberState, userEmailState, changPwState } from '@/store/auth';

const FindPassword = () => {
	const [count, setCount] = useRecoilState(timerState);
	const [checkNum, setCheckNum] = useRecoilState(certificationNumberState);
	const [userEmail, setUserEmail] = useRecoilState(userEmailState);
	const setChangePw = useSetRecoilState(changPwState);
	const cx = classNames.bind(styles);
	const [email, setEmail] = useState('');
	const [num, setNum] = useState('');
	const [firstCheck, setFirstCheck] = useState(true);
	const emailRef = useRef();

	useEffect(() => {
		emailRef.current.focus();
	}, []);

	const emailHandler = (e) => {
		setEmail(e.target.value);
	};
	const certificationNumberHandler = (e) => {
		const trimNum = e.target.value.trim();
		setNum(trimNum);
	};

	/**
	 * 인증번호 발송
	 * @author sohee
	 */
	const sendCertificationNumber = async () => {
		if (regx.emailValid(email)) {
			await userApi
				.getAccessToken(email)
				.then((res) => {
					const token = res.data.body.token;
					window.localStorage.setItem('user', token);
					userApi
						.getCheckAuthCode(email)
						.then((res) => {
							const code = res.data.body.code;
							if (code) {
								setCheckNum(res.data.body.code);
								setCount(179);
								setFirstCheck(false);
								setUserEmail(email);
							}
						})
						.catch((err) => {
							console.log(err);
						});
				})
				.catch((err) => {
					alert('가입되지 않은 이메일입니다.');
				});
		} else {
			alert('이메일을 정확히 입력해주세요.');
		}
	};

	/**
	 * 인증번호 확인
	 * @author sohee
	 */
	const confirmCertificationNumber = () => {
		if (count === 0) {
			alert('인증번호를 재발송 해주세요.');
		} else {
			if (num === checkNum) {
				if (userEmail === email) {
					setChangePw(true);
				} else {
					//유저가 인증번호를 발송하고, 메일 주소를 변경한 후, 인증번호 확인을 눌렀을 때
					alert('이메일을 확인해주세요.');
				}
			} else {
				alert('인증번호가 일치하지 않습니다.');
			}
		}
	};
	return (
		<>
			<div className={cx('find__title-box')}>
				<h1>비밀번호 찾기</h1>
			</div>
			<div className={cx('find__form-box')}>
				<div className={cx('find__form-box__email-box')}>
					<AuthInput
						type="email"
						placeholder="이메일 주소를 입력해주세요."
						onChange={emailHandler}
						ref={emailRef}
					/>
					<button onClick={sendCertificationNumber}>
						{firstCheck && <span>인증번호 발송</span>}
						{!firstCheck && <span>인증번호 재발송</span>}
					</button>
				</div>
				<div className={cx('find__form-box__pw-box')}>
					<AuthInput
						type="text"
						placeholder="인증번호를 입력해주세요."
						onChange={certificationNumberHandler}
					/>
					<AuthTimer />
				</div>
				<div className={cx('find__form-box__btn-box')}>
					<button onClick={confirmCertificationNumber}>
						<span>인증번호 확인</span>
					</button>
				</div>
			</div>
		</>
	);
};

export default FindPassword;
