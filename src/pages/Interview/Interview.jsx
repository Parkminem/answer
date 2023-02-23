import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import PageCard from '@/components/UI/PageCard';
import InterviewSideBar from '@/components/InterviewSideBar';
import InterviewProgressBar from '@/components/InterviewProgressBar';
import Tendency from '@/components/Tendency';
import InterviewBtns from '@/components/InterviewBtns';
import InterviewEndBtns from '@/components/InterviewEndBtns';
import styles from '@/pages/Interview/Interview.module.scss';
import InterviewFrontPart from '@/components/InterviewFrontPart';
import interviewApi from '@/apis/api/interview';

const Interview = () => {
	const cx = classNames.bind(styles);
	const [now, setNow] = useState(true);
	const [tendency, setTendency] = useState(false);
	const [tendency02, setTendency02] = useState(false);
	const [progress, setProgress] = useState(3);
	const [interviewTypes, setInterviewTypes] = useState();
	const [typeDetail, setTypeDetail] = useState(null);
	const [questionIndex, setQuestionIndex] = useState(0);

	useEffect(() => {
		//면접 타입 조회
		const fetchTypes = async () => {
			try {
				const res = await interviewApi.getInterviewType();
				setInterviewTypes(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchTypes();
	}, []);

	//면접 타입을 선택하면 문제를 받아오는 함수
	const fetchTypeDetail = async (typeCode) => {
		try {
			setQuestionIndex(0);
			setProgress(3);
			const res = await interviewApi.getDetailInterviewType(typeCode);
			setTypeDetail(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	const onNext = () => {
		setQuestionIndex(questionIndex + 1);
		setProgress(progress + 3.5);
		const length = typeDetail && typeDetail.responseInterviewQuestions.length;
		if (questionIndex + 1 >= length) {
			setNow(false);
			setTendency(true);
		}
	};

	const onPrev = () => {
		setQuestionIndex(questionIndex - 1);
		setProgress(progress - 3.5);
	};

	return (
		<PageCard>
			<InterviewSideBar
				types={interviewTypes}
				typeDetail={typeDetail}
				fetchTypeDetail={fetchTypeDetail}
				questionIndex={questionIndex}
			/>
			<div className={cx('container')}>
				<InterviewProgressBar width={progress} />
				{now && typeDetail && <InterviewFrontPart typeDetail={typeDetail} questionIndex={questionIndex} />}
				{/* 성향 설문 객관식 5개 */}
				{tendency && (
					<div className={cx('tendency-wrap')}>
						{typeDetail.responsePropensityQuestions.map((item, idx) => {
							if (idx + 1 <= 5) {
								return <Tendency item={item} key={item.propensitySurveyQuestionCode} />;
							}
						})}
					</div>
				)}
				{/* {tendency02 && (
					<div className={cx('tendency-wrap')}>
						{typeDetail.responsePropensityQuestions.map((item, idx) => {
							if (5 < idx + 1 < 11) {
								return <Tendency item={item} key={item.propensitySurveyQuestionCode} />;
							}
						})}
					</div>
				)} */}

				{tendency ? <InterviewEndBtns onPrev={onPrev} /> : <InterviewBtns onNext={onNext} onPrev={onPrev} />}
			</div>
		</PageCard>
	);
};

export default Interview;
