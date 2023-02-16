import React from 'react';
import classNames from 'classnames/bind';
import styles from '@/components/InterviewSideBar.module.scss';

const InterviewSideBar = () => {
	const cx = classNames.bind(styles);
	return (
		<div className={cx('sidebar')}>
			<div className={cx('sidebar-wrap')}>
				<h1>면접 진단하기</h1>
				<div className={cx('sidebar__info-box')}>
					<div className={cx('sidebar__info-box__count')}>
						<span className={cx('now')}>5</span>
						<span>/</span>
						<span>38</span>
					</div>
					<h2>마지막으로, 입사 후 포부를 알려주세요.</h2>
					<div className={cx('sidebar__info-box__test-box')}>
						<h3>면접 진단 테스트</h3>
						<p>나의 면접 예상점수는 몇 점일까?</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InterviewSideBar;
