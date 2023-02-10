import React from 'react';
import classNames from 'classnames/bind';
import styles from '@/pages/FindPw/FindPw.module.scss';
import AuthInput from '@/components/AuthInput';

const FindPw = () => {
	const cx = classNames.bind(styles);
	return (
		<div className={cx('find-wrap')}>
			{' '}
			<div className={cx('find')}>
				<div className={cx('find__title-box')}>
					<h1>비밀번호 찾기</h1>
				</div>
				<div className={cx('find__form-box')}>
					<div className={cx('find__form-box__email-box')}>
						<AuthInput type="email" placeholder="이메일" />
						<button>
							<span>인증번호 발송</span>
							{/* 인증번호 재발송도 있어야함 */}
						</button>
					</div>
					<div className={cx('find__form-box__pw-box')}>
						<AuthInput type="text" placeholder="인증번호를 입력해주세요" />
						<span>3:00</span>
						{/* 인증번호 유효시간 */}
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
