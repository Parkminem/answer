import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { useRecoilState } from 'recoil';
import styles from '@/pages/FindPw/FindPw.module.scss';
import AuthInput from '@/components/AuthInput';
import AuthTimer from '@/components/AuthTimer';
import { regx } from '@/modules/reg';
import userApi from '@/apis/api/user';
import { timer } from '@/store/auth';

const FindPw = () => {
	const [count, setCount] = useRecoilState(timer);
	const cx = classNames.bind(styles);
	const [email, setEmail] = useState('');
	const [certificationNumber, setCertificationNumber] = useState();
	const [firstCheck, setFirstCheck] = useState(true);
	const emailHandler = (e) => {
		setEmail(e.target.value);
	};

	/**
	 * 인증번호 발송
	 * @author sohee
	 */
	const sendCertificationNumber = async () => {
		// if (regx.emailValid(email)) {
		// 	await userApi
		// 		.getCheckAuthCode(email)
		// 		.then((res) => {
		// setCount(179);
		// 			//res 어떻게 오는지 보고 setCertificationNumber 사용하여 저장
		// 			//res 한번 오면 firstCheck 변경
		// 		})
		// 		.catch((err) => {
		// 			//어떻게 오는지 보고 alert 띄우면 되나..?
		// 		});
		// } else {
		// 	alert('이메일을 정확히 입력해주세요.');
		// }
	};

	return (
		<div className={cx('find-wrap')}>
			<div className={cx('find')}>
				<div className={cx('find__title-box')}>
					<h1>비밀번호 찾기</h1>
				</div>
				<div className={cx('find__form-box')}>
					<div className={cx('find__form-box__email-box')}>
						<AuthInput type="email" placeholder="이메일" onChange={emailHandler} />
						<button onClick={sendCertificationNumber}>
							{firstCheck && <span>인증번호 발송</span>}
							{!firstCheck && <span>인증번호 재발송</span>}
						</button>
					</div>
					<div className={cx('find__form-box__pw-box')}>
						<AuthInput type="text" placeholder="인증번호를 입력해주세요" />
						<AuthTimer />
					</div>
					<div className={cx('login__form-box__btn-box')}>
						<button>
							<span>인증번호 확인</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FindPw;
