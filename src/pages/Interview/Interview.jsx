import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useLocation, useNavigate, useBeforeUnload } from 'react-router-dom';
import { Beforeunload } from 'react-beforeunload';
import PageCard from '@/components/UI/PageCard';
import InterviewSideBar from '@/components/InterviewSideBar';
import InterviewProgressBar from '@/components/InterviewProgressBar';
import Tendency from '@/components/Tendency';
import InterviewBtns from '@/components/InterviewBtns';
import InterviewEndBtns from '@/components/InterviewEndBtns';
import MobileSideBar from '@/components/common/MobileSideBar';
import styles from '@/pages/Interview/Interview.module.scss';
import InterviewFrontPart from '@/components/InterviewFrontPart';
import interviewApi from '@/apis/api/interview';
import { useRecoilState } from 'recoil';
import { answerList, repliesState } from '@/store/interview';
import _ from 'lodash';
import { history } from '@/router/history';

const Interview = () => {
	const cx = classNames.bind(styles);
	const width = window.innerWidth;
	const [mobile, setMobile] = useState(width);
	const navigate = useNavigate();
	const [now, setNow] = useState(true);
	const [tendency, setTendency] = useState(false);
	const [tendency02, setTendency02] = useState(false);
	const [tendency03, setTendency03] = useState(false);
	const [tendency04, setTendency04] = useState(false);
	const [tendency05, setTendency05] = useState(false);
	const [progress, setProgress] = useState(3);
	const [interviewTypes, setInterviewTypes] = useState();
	const [typeDetail, setTypeDetail] = useState(null);
	const [questionIndex, setQuestionIndex] = useState(0);
	const [replyContent, setReplyContent] = useRecoilState(answerList);
	const [replies, setReplies] = useRecoilState(repliesState);
	const [ready, setReady] = useState(false);

	//뒤로가기 감지
	useEffect(() => {
		const preventGoBack = () => {
			if (confirm('면접진단이 종료됩니다. 나가시겠습니까?')) {
				navigate(-1);
			} else {
				navigate('/interview');
			}
		};
		const historyEvent = history.listen(({ action }) => {
			if (action === 'POP') {
				preventGoBack();
			}
		});
		return historyEvent;
	}, []);

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
			setReady(true);
		} catch (error) {
			console.log(error);
		}
	};

	const onNext = (e) => {
		setQuestionIndex(questionIndex + 1);
		setProgress(progress + 4);
		const length = typeDetail && typeDetail.responseInterviewQuestions.length;

		//textarea의 값을 가져옴
		let textAreaVal = document.getElementById('interview_content');

		//다음 버튼을 클릭하면 store에 저장
		const newReplies = _.cloneDeep(replies);
		if (questionIndex < 5) {
			setReplyContent(textAreaVal.value);
			newReplies.userCode = localStorage.getItem('code');
			newReplies.interviewTypeCode = typeDetail.interviewTypeCode;
			newReplies.requestInterviewReplyDetails[questionIndex] = {
				interviewQuestionCode: typeDetail.responseInterviewQuestions[questionIndex].interviewQuestionCode,
				interviewQuestionContent: typeDetail.responseInterviewQuestions[questionIndex].questionContent,
				interviewReplyContent: replyContent,
			};
			setReplies(newReplies);
			//textarea 초기화
			textAreaVal.value = '';
		}

		//Todo: switch문으로 교체
		if (questionIndex + 1 >= length) {
			setNow(false);
			setTendency(true);
		}
		if (questionIndex + 1 > 5) {
			setTendency(false);
			setTendency02(true);
			setProgress(progress + 17.5);
		}
		if (questionIndex + 1 > 6) {
			setTendency02(false);
			setTendency03(true);
			setProgress(progress + 17.5);
		}
		if (questionIndex + 1 > 7) {
			setTendency03(false);
			setTendency04(true);
			setProgress(progress + 17.5);
		}
		if (questionIndex + 1 > 8) {
			setTendency04(false);
			setTendency05(true);
			setProgress(progress + 17.5);
		}
	};

	const onPrev = () => {
		setQuestionIndex(questionIndex - 1);
		setProgress(progress - 4);
		setNow(true);

		//Todo: switch문으로 교체
		if (questionIndex === 5) {
			setNow(true);
			setTendency(false);
			setTendency02(false);
			setTendency03(false);
			setTendency04(false);
			setTendency05(false);
		}
		if (questionIndex === 6) {
			setNow(false);
			setTendency(true);
			setTendency02(false);
			setTendency03(false);
			setTendency04(false);
			setTendency05(false);
			setProgress(progress - 17.5);
		}
		if (questionIndex === 7) {
			setNow(false);
			setTendency(false);
			setTendency02(true);
			setTendency03(false);
			setTendency04(false);
			setTendency05(false);
			setProgress(progress - 17.5);
		}
		if (questionIndex === 8) {
			setNow(false);
			setTendency(false);
			setTendency02(false);
			setTendency03(true);
			setTendency04(false);
			setTendency05(false);
			setProgress(progress - 17.5);
		}
		if (questionIndex === 9) {
			setNow(false);
			setTendency(false);
			setTendency02(false);
			setTendency03(false);
			setTendency04(true);
			setTendency05(false);
			setProgress(progress - 17.5);
		}
	};

	return (
		<Beforeunload onBeforeunload={() => '새로고침 시 면접진단이 종료됩니다. 새로고침 하시겠습니까?'}>
			{mobile < 401 && <MobileSideBar />}
			<PageCard>
				<InterviewSideBar
					types={interviewTypes}
					typeDetail={typeDetail}
					fetchTypeDetail={fetchTypeDetail}
					questionIndex={questionIndex}
					ready={ready}
				/>
				{ready ? (
					<div className={cx('container')}>
						<InterviewProgressBar width={progress} />
						{now && typeDetail && (
							<InterviewFrontPart typeDetail={typeDetail} questionIndex={questionIndex} onNext={onNext} />
						)}
						{/* 성향 설문 객관식 5개 */}
						{tendency && (
							<div className={cx('tendency-wrap')}>
								{typeDetail.responsePropensityQuestions.map((item, idx) => {
									if (idx + 1 < 6) {
										return (
											<Tendency
												item={item}
												key={item.propensitySurveyQuestionCode}
												onNext={onNext}
											/>
										);
									}
								})}
							</div>
						)}
						{tendency02 && (
							<div className={cx('tendency-wrap')}>
								{typeDetail.responsePropensityQuestions.map((item, idx) => {
									if (5 < idx + 1 && idx + 1 <= 10) {
										return (
											<Tendency
												item={item}
												key={item.propensitySurveyQuestionCode}
												onNext={onNext}
											/>
										);
									}
								})}
							</div>
						)}
						{tendency03 && (
							<div className={cx('tendency-wrap')}>
								{typeDetail.responsePropensityQuestions.map((item, idx) => {
									if (10 < idx + 1 && idx + 1 <= 15) {
										return (
											<Tendency
												item={item}
												key={item.propensitySurveyQuestionCode}
												onNext={onNext}
											/>
										);
									}
								})}
							</div>
						)}
						{tendency04 && (
							<div className={cx('tendency-wrap')}>
								{typeDetail.responsePropensityQuestions.map((item, idx) => {
									if (15 < idx + 1 && idx + 1 <= 20) {
										return (
											<Tendency
												item={item}
												key={item.propensitySurveyQuestionCode}
												onNext={onNext}
											/>
										);
									}
								})}
							</div>
						)}
						{tendency05 && (
							<div className={cx('tendency-wrap')}>
								{typeDetail.responsePropensityQuestions.map((item, idx) => {
									if (20 < idx + 1 && idx + 1 <= 25) {
										return (
											<Tendency
												item={item}
												key={item.propensitySurveyQuestionCode}
												onNext={onNext}
											/>
										);
									}
								})}
							</div>
						)}
						{typeDetail && tendency05 === false ? (
							<InterviewBtns onNext={onNext} onPrev={onPrev} idx={questionIndex} />
						) : (
							<InterviewEndBtns onPrev={onPrev} />
						)}
					</div>
				) : (
					<div className={cx('container')}></div>
				)}
			</PageCard>
		</Beforeunload>
	);
};

export default Interview;
