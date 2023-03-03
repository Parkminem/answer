import React from 'react';
import classNames from 'classnames/bind';
import styles from '@/components/InterviewBtns.module.scss';

const InterviewBtns = (props) => {
	const cx = classNames.bind(styles);
	return (
		<div className={cx('btns', props.idx == 0 ? 'hidden' : '')}>
			<div className={cx('btns__btn', 'prev-box')}>
				<button className={cx('prev')} onClick={props.onPrev}>
					<span>&lt;&nbsp;&nbsp;&nbsp;이전</span>
				</button>
			</div>
			<div className={cx('btns__btn', 'next_btn')}>
				<button type="submit" className={cx('next')} onClick={props.onNext}>
					<span>다음으로&nbsp;&nbsp;&nbsp;&gt;</span>
				</button>
			</div>
		</div>
	);
};

export default InterviewBtns;
