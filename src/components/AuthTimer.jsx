import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { timerState, certificationNumberState } from '@/store/auth';
import styles from '@/components/AuthTimer.module.scss';

/**
 * 인증번호 타이머 컴포넌트 : atom으로 초 관리, 재발송 마다 초를 다시 세팅(부모 컴포넌트)
 * @author sohee
 */
const AuthTimer = () => {
	const cx = classNames.bind(styles);
	const [count, setCount] = useRecoilState(timerState);
	const resetNumber = useResetRecoilState(certificationNumberState);

	useEffect(() => {
		if (count < 180) {
			let counter;
			clearInterval(counter);
			if (count > 0) {
				counter = setInterval(() => {
					setCount((prev) => prev - 1);
				}, 1000);
				return () => clearInterval(counter);
			} else if (count === 0) {
				resetNumber();
				setCount(180);
			}
		}
	}, [count]);

	const timeFormat = (time) => {
		const m = Math.floor(time / 60).toString();
		let s = (time % 60).toString();
		if (s.length === 1) s = `0${s}`;
		return `${m}:${s}`;
	};

	return (
		<>
			<span className={cx('time')}>{timeFormat(count)}</span>
		</>
	);
};

export default AuthTimer;
