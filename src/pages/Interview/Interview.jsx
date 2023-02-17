import React, { useState } from 'react';
import classNames from 'classnames/bind';
import PageCard from '@/components/UI/PageCard';
import InterviewSideBar from '@/components/InterviewSideBar';
import InterviewProgressBar from '@/components/InterviewProgressBar';
import Tendency from '@/components/Tendency';
import InterviewBtns from '@/components/InterviewBtns';
import InterviewEndBtns from '@/components/InterviewEndBtns';
import styles from '@/pages/Interview/Interview.module.scss';
import InterviewFrontPart from '@/components/InterviewFrontPart';

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
	const [next01, setNext01] = useState(false);
	const [next02, setNext02] = useState(false);
	return (
		<PageCard>
			<InterviewSideBar />
			<div className={cx('container')}>
				<InterviewProgressBar />
				<InterviewFrontPart />
				{/* 성향 설문 객관식 5개 */}
				{/* <div className={cx('tendency-wrap')}>
					{dummy01.map((item) => {
						return <Tendency item={item} key={item.id} />;
					})}
				</div> */}
				{/* 성향 설문 객관식 3개 */}
				{/* <div className={cx('tendency-wrap')}>
				{
					dummy02.map((item)=>{
						return <Tendency item={item} key={item.id}/>
					})
				}
				</div> */}
				{/* 이전,다음 버튼 */}
				<InterviewBtns />
				{/* 완료 버튼 */}
				{/* <InterviewEndBtns /> */}
			</div>
		</PageCard>
	);
};

export default Interview;
