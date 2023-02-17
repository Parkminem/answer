import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from '@/pages/Join/Join.module.scss';
import AuthInput from '@/components/AuthInput';
import AuthCard from '@/components/UI/AuthCard';
import { regx } from '@/modules/reg';
import userApi from '@/apis/api/user';

const Join = () => {
	const cx = classNames.bind(styles);
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [pwCheck, setPwCheck] = useState('');
	const [emailCheck, setEmailCheck] = useState(false);
	const [opacity, setOpacity] = useState(0);
	const emailRef = useRef();

	useEffect(() => {
		emailRef.current.focus();
	}, []);

	/**
	 * 회원가입 api 전송하기 전에 검증을 위해 value값을 받아놓음
	 * @param e(AuthInput 안의 input의 value)
	 * @author sohee
	 */
	const emailHandler = (e) => {
		setEmail(e.target.value);
		if (emailCheck) {
			setEmailCheck(false);
			setOpacity(0);
		}
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
	const joinHandler = async (e) => {
		e.preventDefault();
		if (!regx.emailValid(email)) {
			alert('이메일을 입력해주세요.');
			return false;
		}
		if (!regx.passwordValid(password)) {
			alert('비밀번호는 영문, 숫자, 특수문자 포함 8 ~ 32자까지 입니다.');
			return false;
		}
		if (password !== pwCheck) {
			alert('비밀번호가 일치하지 않습니다.');
			return false;
		}
		if (!emailCheck) {
			alert('이메일 중복 확인 해주세요.');
			return false;
		}
		if (email.length === 0 || password.length === 0 || pwCheck.length === 0) {
			alert('모든 칸을 입력해주세요');
			return false;
		} else {
			const formData = {
				userEmail: email,
				password: password,
			};
			await userApi
				.getSignUp(formData)
				.then((res) => {
					if (res.status === 201) {
						navigate('/');
					}
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	//중복 확인 함수... api가 없음(유저 목록 조회api가 있는데 이건 모든 유저 목록을 받아오는 듯..?)
	const emailDuplicate = async (e) => {
		e.preventDefault();
		setEmail(email);
		await userApi
			.getCheckEmail(email)
			.then((res) => {
				if (res.data) {
					setEmailCheck(true);
					setOpacity(100);
				} else {
					setEmailCheck(false);
					setOpacity(100);
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<AuthCard>
			<div className={cx('join-wrap')}>
				<div className={cx('join')}>
					<form className={cx('join__form-box')} id="form" onSubmit={joinHandler}>
						<div className={cx('join__form-box__email-box')}>
							<AuthInput
								type="email"
								placeholder="이메일"
								name="userEmail"
								onChange={emailHandler}
								ref={emailRef}
							/>
							<button onClick={emailDuplicate}>
								<span>중복 확인</span>
							</button>
							<div className={cx('usable')} style={{ opacity: opacity }}>
								{emailCheck ? (
									<p className={cx('ok')}>사용 가능한 이메일 입니다.</p>
								) : (
									<p className={cx('no')}>이미 가입되어 있는 이메일입니다.</p>
								)}
							</div>
						</div>
						<AuthInput type="password" placeholder="비밀번호" name="password" onChange={passwordHandler} />
						<AuthInput type="password" placeholder="비밀번호 확인" onChange={pwCheckHandler} />
						<div className={cx('join__form-box__btn-box')}>
							<button onClick={joinHandler}>
								<span>회원가입</span>
							</button>
						</div>
					</form>
				</div>
			</div>
		</AuthCard>
	);
};

export default Join;
