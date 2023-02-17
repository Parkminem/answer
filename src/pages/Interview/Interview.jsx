import React, { useState } from 'react';
import classNames from 'classnames/bind';
import PageCard from '@/components/UI/PageCard';
import InterviewSideBar from '@/components/InterviewSideBar';
import InterviewProgressBar from '@/components/InterviewProgressBar';
import Tendency from '@/components/Tendency';
import InterviewBtns from '@/components/InterviewBtns';
import InterviewEndBtns from '@/components/InterviewEndBtns';
import styles from '@/pages/Interview/Interview.module.scss';

const dummy01 = [
	{ id: 6, text: '나는 타인과 대화하는 것에 어려움이 없다.' },
	{ id: 7, text: '나는 사람보다 고양이랑 대화하는게 편하다.' },
	{ id: 8, text: '나는 사람보다 고양이랑 대화하는게 편하다.' },
	{ id: 9, text: '나는 타인과 대화하는 것에 어려움이 없다.' },
	{ id: 10, text: '나는 사람보다 고양이랑 대화하는게 편하다.' },
];
const dummy02 = [
	{ id: 36, text: '나는 타인과 대화하는 것에 어려움이 없다.' },
	{ id: 37, text: '나는 사람보다 고양이랑 대화하는게 편하다.' },
	{ id: 38, text: '나는 타인과 대화하는 것에 어려움이 없다.' },
];

const Interview = () => {
	const cx = classNames.bind(styles);
	const [now, setNow] = useState(true);
	const [next01, setNext01] = useState(false);
	const [next02, setNext02] = useState(false);

	//첫번째 페이지로 이동
	const firstPage = () => {
		setNow(true);
		setNext01(false);
		setNext02(false);
	};

	//두번째 페이지로 이동
	const secondPage = () => {
		setNow(false);
		setNext01(true);
		setNext02(false);
	};

	//마지막 페이지로 이동
	const lastPage = () => {
		setNow(false);
		setNext01(false);
		setNext02(true);
	};
	return (
		<PageCard>
			<InterviewSideBar />
			<div className={cx('container')}>
				<InterviewProgressBar />
				{/* 성향 설문 객관식 5개 */}
				<div className={cx('tendency-wrap')}>
					{dummy01.map((item) => {
						return <Tendency item={item} key={item.id} />;
					})}
				</div>
				{/* 성향 설문 객관식 3개 */}
				{next02 && (
					<div className={cx('tendency-wrap')}>
						{dummy02.map((item) => {
							return <Tendency item={item} key={item.id} />;
						})}
					</div>
				)}
				{next02 ? <InterviewEndBtns /> : <InterviewBtns />}
			</div>
		</PageCard>
	);
};

export default Interview;
