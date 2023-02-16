import React from 'react';
import classNames from 'classnames/bind';
import styles from '@/components/InterviewProgressBar.module.scss';

const InterviewProgressBar = () => {
	const cx = classNames.bind(styles);
	return (
		<div className={cx('progress')}>
			<span>13%</span>
			<div className={cx('progress__bar')}>
				<div className=""></div>
				<div className=""></div>
				<div className=""></div>
				<div className=""></div>
				<div className=""></div>
				<div className=""></div>
				<div className=""></div>
				<div className=""></div>
				<div className=""></div>
				<div className=""></div>
				<div className=""></div>
				<div className=""></div>
			</div>
		</div>
	);
};

export default InterviewProgressBar;
