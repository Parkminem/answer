import React, { useEffect, useState } from 'react';
import SubHeader from '@/components/interview/SubHeader';
import Subheading from '@/components/interview/Subheading';
import TextBoxBasicWrap from '@/components/interview/TextBoxBasicWrap';
import BestWordList from '@/components/interview/BestWordList';
import TextBoxNumberList from '@/components/interview/TextBoxNumberList';
import TextBoxP from '@/components/interview/TextBoxP';
import SubQuestionTextWrap from '@/components/interview/SubQuestionTextWrap';
import defaultInstance from '@/apis/utils/defaultInstance';
import produce from 'immer';
import { useRecoilState, useResetRecoilState, useRecoilValue } from 'recoil';
import {
	wordFreqState,
	noticeableAnswersState,
	answersSummaryState,
	keySentenceState,
	interviewReplyCodeState,
	requestInterviewReplyDetailsState,
} from '@/store/interview';
import { useNavigate } from 'react-router-dom';
import '@/assets/styles/interview.css';

const InterviewResult = () => {
	const [wordFreq, setWordFreq] = useRecoilState(wordFreqState);
	const [noticeableAnswers, setNoticeableAnswers] = useRecoilState(noticeableAnswersState);
	const [answersSummary, setAnswersSummary] = useRecoilState(answersSummaryState);
	const [keySentence, setKeySentence] = useRecoilState(keySentenceState);
	const interviewReplyCode = useRecoilValue(interviewReplyCodeState);
	const myRequestInterviewReplyDetails = useRecoilValue(requestInterviewReplyDetailsState);
	const resetWordFreq = useResetRecoilState(wordFreqState);
	const resetNoticeableAnswers = useResetRecoilState(noticeableAnswersState);
	const resetAnswersSummary = useResetRecoilState(answersSummaryState);
	const resetKeySentence = useResetRecoilState(keySentenceState);
	const navigate = useNavigate();

	// useEffect(() => {
	// 	interviewReplyCode ?? navigate('/interviewtest');

	// 	defaultInstance.get(`/api/v1/interview-replies/${interviewReplyCode}/interview-feedbacks`).then((res) => {
	// 		console.log(JSON.parse(res.data.content));
	// 		for (let i of JSON.parse(res.data.content)[3].keySentence) {
	// 			console.log(i);
	// 		}
	// 		setAnswersSummary(...JSON.parse(res.data.content)[1].AnswersSummary);
	// 		setNoticeableAnswers(
	// 			produce(noticeableAnswers, (draft) => {
	// 				for (let i of JSON.parse(res.data.content)[2].noticeableAnswers) {
	// 					draft.push(i);
	// 				}
	// 			}),
	// 		);
	// 		setKeySentence(
	// 			produce(keySentence, (draft) => {
	// 				for (let i of JSON.parse(res.data.content)[3].keySentence) {
	// 					draft.push(i);
	// 				}
	// 			}),
	// 		);
	// 		setWordFreq(
	// 			produce(wordFreq, (draft) => {
	// 				for (let i of JSON.parse(res.data.content)[4].wordFreq) {
	// 					draft.push(i);
	// 				}
	// 			}),
	// 		);
	// 	});
	// 	return () => {
	// 		resetWordFreq();
	// 		resetNoticeableAnswers();
	// 		resetAnswersSummary();
	// 		resetKeySentence();
	// 	};
	// }, []);

	return (
		<>
			<SubHeader title="면접 진단 하기" location="면접 진단 하기" currentLocation="테스트 시작 하기" />
			<div className="sub_wrap">
				<div className="content_wrap">
					<div className="content">
						<Subheading title="면접 진단 테스트" content="나의 면접 예상점수는 몇점일까?" />
						<div className="text_box_basic_wrap">
							<TextBoxBasicWrap title="가장 많이 언급한 단어" subtitle="TOP5" />
							<BestWordList />
						</div>
						<div className="text_box_basic_wrap">
							<TextBoxBasicWrap
								title="면접관이 주목할만한 상위 문장"
								subtitle={`TOP${noticeableAnswers.length}`}
							/>
							<div className="text_box_basic">
								<TextBoxNumberList />
							</div>
						</div>
						<div className="text_box_basic_wrap">
							<TextBoxBasicWrap title="전체 답변 요약" />
							<div className="text_box_basic">
								<TextBoxP content={answersSummary} />
							</div>
						</div>
						<div className="text_box_basic_wrap">
							<TextBoxBasicWrap title="답변 리스트" />
							{keySentence.map((v, i) => (
								<SubQuestionTextWrap
									key={v + i}
									index={i < 9 ? `0${i + 1}` : `${i + 1}`}
									question={`"${
										myRequestInterviewReplyDetails[v[0]].interviewQuestionContent
									}"에 대한 답변 중 ${v[1] + 1}번째 문단입니다.`}
									keyWord={`${v[2]}`}
									// content="면접진단한 페이지에서 답변한 내용의 전체 요약을 텍스트로 보여줍니다."
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default InterviewResult;
