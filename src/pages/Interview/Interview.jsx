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
	const [next01, setNext01] = useState(false);
	const [next02, setNext02] = useState(false);
	const [progress, setProgress] = useState(13);
	const [interviewTypes, setInterviewTypes] = useState();
	const [typeDetail, setTypeDetail] = useState(null);
	const [title, setTitle] = useState({
		count: 5,
		text: '마지막으로, 입사 후 포부를 알려주세요.',
	});

	useEffect(() => {
		//면접 타입 조회
		const fetchTypes = async () => {
			try {
				setInterviewTypes(null);
				const res = await interviewApi.getInterviewType();
				setInterviewTypes(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchTypes();
	}, []);

	const fetchTypeDetail = async (typeCode) => {
		try {
			setTypeDetail(null);
			const res = await interviewApi.getDetailInterviewType(typeCode);
			setTypeDetail(res.data);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<PageCard>
			<InterviewSideBar typeDetail={typeDetail} types={interviewTypes} fetchTypeDetail={fetchTypeDetail} />
			<div className={cx('container')}>
				<InterviewProgressBar width={progress} />
				{typeDetail && <InterviewFrontPart typeDetail={typeDetail} />}
				{/* 성향 설문 객관식 5개 */}
				{next01 && (
					<div className={cx('tendency-wrap')}>
						{typeDetail.responsePropensityQuestions.map((item) => {
							return <Tendency item={item} key={item.propensitySurveyQuestionCode} />;
						})}
					</div>
				)}
				{/* 성향 설문 객관식 3개 */}
				{next02 && (
					<div className={cx('tendency-wrap')}>
						{typeDetail.responsePropensityQuestions.map((item) => {
							return <Tendency item={item} key={item.propensitySurveyQuestionCode} />;
						})}
					</div>
				)}
				{next02 ? <InterviewEndBtns /> : <InterviewBtns />}
			</div>
		</PageCard>
	);
};

export default Interview;
