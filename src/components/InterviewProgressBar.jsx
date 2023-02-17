import React from 'react';
import classNames from 'classnames/bind';
import styles from '@/components/InterviewProgressBar.module.scss';

const InterviewProgressBar = () => {
	const cx = classNames.bind(styles);
	return (
		<div className={cx('progress')}>
			<span>13%</span>
			<div className={cx('progress__bar', 'ing')}>
				{/* span의 width를 자바스크립트로 style변화 주기 */}
				<span></span>
			</div>
		</div>
	);
};

export default InterviewProgressBar;
