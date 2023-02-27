import React from 'react';
import classNames from 'classnames/bind';
import styles from '@/components/InterviewEndBtns.module.scss';

const InterviewEndBtns = (props) => {
	const cx = classNames.bind(styles);
	return (
		<div className={cx('btns')}>
			<div className={cx('btns__btn', 'prev-box')}>
				<button className={cx('prev')} onClick={props.onPrev}>
					<span>&lt;&nbsp;&nbsp;&nbsp;이전</span>
				</button>
			</div>
			<div className={cx('btns__btn')}>
				<button className={cx('next')}>
					<span>응답 제출</span>
				</button>
			</div>
		</div>
	);
};

export default InterviewEndBtns;
