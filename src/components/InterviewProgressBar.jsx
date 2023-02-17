import React from 'react';
import classNames from 'classnames/bind';
import styles from '@/components/InterviewProgressBar.module.scss';

const InterviewProgressBar = (props) => {
	const cx = classNames.bind(styles);
	return (
		<div className={cx('progress')}>
			<span>{props.width}%</span>
			<div className={cx('progress__bar', 'ing')}>
				<span style={{ width: props.width + '%' }}></span>
			</div>
		</div>
	);
};

export default InterviewProgressBar;
