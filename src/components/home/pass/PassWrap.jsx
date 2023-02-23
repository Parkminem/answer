import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from '@/components/home/pass/PassWrap.module.scss';
import PassList from '@/components/home/pass/PassList';
import trophy from '@/assets/images/image/pass_trophy.png';
import answer from '@/assets/images/image/pass_answer.png';
import mTrophy from '@/assets/images/mobile/mobile_trophy.png';

const PassWrap = () => {
	const cx = classNames.bind(styles);
	const width = window.innerWidth;
	const [mobile, setMobile] = useState(width);
	return (
		<section className={cx('pass-wrap')}>
			<PassList />
			<div className={cx('pass-throphy-box')}>
				<img src={mobile < 401 ? mTrophy : trophy} alt="앤써의 다음 면접 합격자는 바로 당신입니다." />
			</div>
			<div className={cx('pass-answer-box')}>
				<img src={answer} alt="앤써" />
			</div>
		</section>
	);
};

export default PassWrap;
