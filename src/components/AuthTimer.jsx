import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { timer } from '@/store/auth';

/**
 * 인증번호 타이머 컴포넌트 : atom으로 초 관리, 재발송 마다 초를 다시 세팅(부모 컴포넌트)
 * @author sohee
 */
const AuthTimer = () => {
	const [count, setCount] = useRecoilState(timer);

	useEffect(() => {
		if (count < 180) {
			let counter;
			clearInterval(counter);
			if (count > 0) {
				counter = setInterval(() => {
					setCount(count - 1);
				}, 1000);
				return () => clearInterval(counter);
			} else if (count === 0) {
				//state에 등록해놓은 인증번호를 지우면..?
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
			<span>{/* {min} : {sec < 10 ? '0' + sec : sec} */}</span>
			<span>{timeFormat(count)}</span>
		</>
	);
};

export default AuthTimer;
