import React, { useState } from 'react';
import classNames from 'classnames/bind';
import PageCard from '@/components/UI/PageCard';
import InterviewSideBar from '@/components/InterviewSideBar';
import InterviewProgressBar from '@/components/InterviewProgressBar';
import Tendency from '@/components/Tendency';
import InterviewBtns from '@/components/InterviewBtns';
import InterviewEndBtns from '@/components/InterviewEndBtns';
import styles from '@/pages/Interview/Interview.module.scss';

const Interview = () => {
	const cx = classNames.bind(styles);
	const [next01, setNext01] = useState(false);
	const [next02, setNext02] = useState(false);
	return (
		<PageCard>
			<InterviewSideBar />
			<div className={cx('container')}>
				<InterviewProgressBar />
				{/* 성향 설문 객관식 5개 */}
				{/* <div className={cx('tendency-wrap')}>
					<Tendency />
					<Tendency />
					<Tendency />
					<Tendency />
					<Tendency />
				</div> */}
				{/* 성향 설문 객관식 3개 */}
				{/* <div className={cx('tendency-wrap')}>
					<Tendency />
					<Tendency />
					<Tendency />
				</div> */}
				{/* 이전,다음 버튼 */}
				{/* <InterviewBtns /> */}
				{/* 완료 버튼 */}
				{/* <InterviewEndBtns /> */}
			</div>
		</PageCard>
	);
};

export default Interview;
