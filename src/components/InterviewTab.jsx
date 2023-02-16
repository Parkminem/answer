import React from 'react';
import classNames from 'classnames/bind';
import { useLocation, Link } from 'react-router-dom';
import styles from '@/components/InterviewTab.module.scss';

const InterviewTab = () => {
	const cx = classNames.bind(styles);
	const { pathname } = useLocation();
	return (
		<div className={cx('interview-tap')}>
			<div
				className={cx(
					'interview-tap__desc',
					pathname === '/mypage/diagnostic_history' || pathname === '/mypage/diagnostic_detail'
						? 'active'
						: '',
				)}
			>
				<Link to="/mypage/diagnostic_history">
					<span>면접 진단 내용</span>
				</Link>
			</div>
			<div className={cx('interview-tap__feedback', pathname === '/mypage/feedback' ? 'active' : '')}>
				<Link to="/mypage/feedback">
					<span>면접 피드백</span>
				</Link>
			</div>
		</div>
	);
};

export default InterviewTab;
