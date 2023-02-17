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
	const [now, setNow] = useState(true);
	const [next01, setNext01] = useState(false);
	const [next02, setNext02] = useState(false);
	const [progress, setProgress] = useState(13);
	const [title, setTitle] = useState({
		count: 5,
		text: '마지막으로, 입사 후 포부를 알려주세요.',
	});

	//첫번째 페이지로 이동
	const firstPage = () => {
		setNow(true);
		setNext01(false);
		setNext02(false);
		setProgress(13);
		setTitle({
			count: 5,
			text: '마지막으로, 입사 후 포부를 알려주세요.',
		});
	};

	//두번째 페이지로 이동
	const secondPage = () => {
		setNow(false);
		setNext01(true);
		setNext02(false);
		setProgress(18);
		setTitle({
			count: '6-10',
			text: '주어진 문항에 대한 답변을 선택해 주십시오.',
		});
	};

	//마지막 페이지로 이동
	const lastPage = () => {
		setNow(false);
		setNext01(false);
		setNext02(true);
		setProgress(94);
		setTitle({
			count: '36-38',
			text: '주어진 문항에 대한 답변을 선택해 주십시오.',
		});
	};

	//다음 버튼
	const nextBtn = () => {
		if (next01) {
			return lastPage();
		} else {
			return secondPage();
		}
	};
	//이전 버튼
	const preBtn = () => {
		if (next01) {
			return firstPage();
		} else if (next02) {
			return secondPage();
		} else {
			return false;
		}
	};
	return (
		<PageCard>
			<InterviewSideBar title={title} />
			<div className={cx('container')}>
				<InterviewProgressBar width={progress} />
				{now && <InterviewFrontPart />}
				{/* 성향 설문 객관식 5개 */}
				{next01 && (
					<div className={cx('tendency-wrap')}>
						{dummy01.map((item) => {
							return <Tendency item={item} key={item.id} />;
						})}
					</div>
				)}
				{/* 성향 설문 객관식 3개 */}
				{next02 && (
					<div className={cx('tendency-wrap')}>
						{dummy02.map((item) => {
							return <Tendency item={item} key={item.id} />;
						})}
					</div>
				)}
				{next02 ? <InterviewEndBtns onClick={secondPage} /> : <InterviewBtns onNext={nextBtn} onPre={preBtn} />}
			</div>
		</PageCard>
	);
};

export default Interview;
