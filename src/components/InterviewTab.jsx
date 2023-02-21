import React from 'react';
import classNames from 'classnames/bind';
import styles from '@/components/InterviewTab.module.scss';

const InterviewTab = (props) => {
	const cx = classNames.bind(styles);
	return (
		<div className={cx('interview-tap')}>
			<div className={cx('interview-tap__desc')}>
				<span>{props.title}</span>
			</div>
		</div>
	);
};

export default InterviewTab;
