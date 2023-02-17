import React from 'react';
import classNames from 'classnames/bind';
import styles from '@/components/InterviewBtns.module.scss';

const InterviewBtns = () => {
	const cx = classNames.bind(styles);
	return (
		<div className={cx('btns')}>
			<div className={cx('btns__btn')}>
				<button className={cx('prev')}>
					<span>&lt;&nbsp;&nbsp;&nbsp;이전</span>
				</button>
			</div>
			<div className={cx('btns__btn')}>
				<button className={cx('next')}>
					<span>다음으로&nbsp;&nbsp;&nbsp;&gt;</span>
				</button>
			</div>
		</div>
	);
};

export default InterviewBtns;
