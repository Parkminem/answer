import React, { useState } from 'react';
import classNames from 'classnames/bind';
import PageCard from '@/components/UI/PageCard';
import InterviewSideBar from '@/components/InterviewSideBar';
import InterviewProgressBar from '@/components/InterviewProgressBar';
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
			</div>
		</PageCard>
	);
};

export default Interview;
