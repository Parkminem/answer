import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { useRecoilState } from 'recoil';
import styles from '@/pages/FindPw/FindPw.module.scss';
import AuthInput from '@/components/AuthInput';
import AuthTimer from '@/components/AuthTimer';
import { regx } from '@/modules/reg';
import userApi from '@/apis/api/user';
import { timer, certificationNumber } from '@/store/auth';

const FindPw = () => {
	const [count, setCount] = useRecoilState(timer);
	const [checkNum, setCheckNum] = useRecoilState(certificationNumber);
	const cx = classNames.bind(styles);
	const [email, setEmail] = useState('');
	const [num, setNum] = useState('');
	const [firstCheck, setFirstCheck] = useState(true);

	const emailHandler = (e) => {
		setEmail(e.target.value);
	};
	const certificationNumberHandler = (e) => {
		setNum(e.target.value);
	};

	/**
	 * 인증번호 발송
	 * @author sohee
	 */
	const sendCertificationNumber = async () => {
		if (regx.emailValid(email)) {
			await userApi
				.getCheckAuthCode(email)
				.then((res) => {
					setCount(179);
					setCheckNum('res.인증번호');
					//res 한번 오면 firstCheck 변경(false)
				})
				.catch((err) => {
					//어떻게 오는지 보고 alert 띄우면 되나..?
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
		if (num === checkNum) {
			//비밀번호를 알려줘야되는데 알려주는 api 없음...
		} else {
			alert('인증번호가 일치하지 않습니다.');
		}
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
						<AuthInput
							type="text"
							placeholder="인증번호를 입력해주세요"
							onChange={certificationNumberHandler}
						/>
						<AuthTimer />
					</div>
					<div className={cx('login__form-box__btn-box')}>
						<button onClick={confirmCertificationNumber}>
							<span>인증번호 확인</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FindPw;
