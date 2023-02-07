import SubHeader from '@/components/InterView/SubHeader';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import defaultInstance from '@/apis/utils/defaultInstance';
import { requestInterviewReplyDetailsState, interviewReplyCodeState } from '@/store/interview';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { SpinnerCircular } from 'spinners-react';
import bg from '@/assets/images/image/question_bg.png';
import '@/assets/styles/interview.css';

const userCode = 1; // 임시 유저 코드

const modalStyles = {
	content: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		gap: '20px',
		alignItems: 'center',
		width: '200px',
		height: '100px',
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

Modal.setAppElement('#root');

const InterviewTestDetail = () => {
	const [interviewTypes, setInterviewTypes] = useState([]);
	const [typeSelected, setTypeSelected] = useState('');
	const [interviewQuestions, setInterviewQuestions] = useState([]);
	const [questionIndex, setQuestionIndex] = useState(0);
	const [myAnswer, setMyAnswer] = useState('');
	const [isReady, setIsReady] = useState(false);
	const [prevNext, setPrevNext] = useState(false);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const textAreaRef = useRef(null);

	const onOpenModal = () => {
		setModalIsOpen(true);
	};
	const onCloseModal = () => {
		setModalIsOpen(false);
	};

	const [myRequestInterviewReplyDetails, setMyRequestInterviewReplyDetails] = useRecoilState(
		requestInterviewReplyDetailsState,
	);
	const [interviewReplyCode, setInterviewReplyCode] = useRecoilState(interviewReplyCodeState);

	const navigate = useNavigate();

	const handleSelect = (e) => {
		setTypeSelected(e.target.value);
	};
	const handleInput = (e) => {
		setMyAnswer(e.target.value);
	};

	const makeReply = () => {
		setMyRequestInterviewReplyDetails((prev) => [
			...prev,
			{
				interviewQuestionCode: interviewQuestions[questionIndex].interviewQuestionCode,
				interviewQuestionContent: interviewQuestions[questionIndex].questionContent,
				interviewReplyContent: myAnswer,
			},
		]);
	};

	const handlePrevBtn = () => {
		makeReply();
		if (interviewQuestions.length !== 0 && questionIndex > 0) {
			setQuestionIndex((prev) => prev - 1);
			setPrevNext((prev) => !prev);
		}
	};
	const handleNextBtn = () => {
		makeReply();
		if (interviewQuestions.length !== 0 && questionIndex < interviewQuestions.length - 1) {
			setQuestionIndex((prev) => prev + 1);
			setPrevNext((prev) => !prev);
		}
	};

	const onSubmitInterview = () => {
		makeReply();
		setIsLoading(true);
		setIsReady(true);
	};

	useEffect(() => {
		const presentReply = myRequestInterviewReplyDetails.filter(
			(reply) => reply.interviewQuestionCode === interviewQuestions[questionIndex].interviewQuestionCode,
		);
		presentReply.length !== 0 ? setMyAnswer(presentReply[0].interviewReplyContent) : setMyAnswer('');
		setMyRequestInterviewReplyDetails((prev) =>
			prev.filter(
				(reply) => reply.interviewQuestionCode !== interviewQuestions[questionIndex].interviewQuestionCode,
			),
		);
	}, [prevNext]);

	useEffect(() => {
		const myAnswerData = {
			userCode: userCode,
			interviewTypeCode: Number(typeSelected),
			requestInterviewReplyDetails: myRequestInterviewReplyDetails,
		};

		isReady &&
			defaultInstance
				.post(`/api/v1/users/${userCode}/interview-replies`, myAnswerData)
				.then((res) => {
					setInterviewReplyCode(res.data.interviewReplyCode);
					setIsLoading(false);
					navigate('/interviewtest/result');
				})
				.catch((err) => {
					setIsLoading(false);
					setIsReady(false);
					setModalIsOpen(false);
					alert('면접 답변 형식이 올바르지 않습니다.');
				});
	}, [isReady]);

	useEffect(() => {
		defaultInstance.get('/api/v1/interview-types').then((res) => {
			setInterviewTypes(res.data);
		});
		if (typeSelected) {
			defaultInstance.get(`/api/v1/interview-types/${typeSelected}/interview-questions`).then((res) => {
				setInterviewQuestions(res.data);
				setQuestionIndex(0);
				setMyRequestInterviewReplyDetails([]);
				setIsReady(false);
				textAreaRef.current.removeAttribute('disabled');
			});
		} else {
			setInterviewQuestions([]);
			textAreaRef.current.setAttribute('disabled', '');
		}
		return () => {
			setMyAnswer('');
		};
	}, [typeSelected]);

	return (
		<div className="wrap wrap_basic">
			<SubHeader title="면접 진단 하기" location="면접 진단 하기" currentLocation="테스트 시작하기" />
			<Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} contentLabel="hello" style={modalStyles}>
				<div>답변을 제출하시겠습니까?</div>

				<div>
					<button className="interview_back_btn" onClick={onCloseModal}>
						뒤로가기
					</button>
					<button className="interview_submit_btn" onClick={onSubmitInterview}>
						제출하기
					</button>
				</div>
			</Modal>
			<SpinnerCircular enabled={isLoading} className="loading_spinner" />
			<div className="sub_wrap">
				<div className="content_wrap">
					<div className="content">
						<div className="question_write_wrap">
							<div className="question_area_wrap" style={{ backgroundImage: `url(${bg})` }}>
								<div className="my_write_top">
									<select
										name=""
										id=""
										className="question_category"
										onChange={handleSelect}
										value={typeSelected}
									>
										<option value="">진단 항목을 선택해 주세요.</option>
										{interviewTypes.map((type) => (
											<option key={type.interviewTypeCode} value={type.interviewTypeCode}>
												{type.interviewType}
											</option>
										))}
									</select>
								</div>
								{interviewQuestions.length !== 0 && (
									<div className="question_box">
										<div className="order">
											<span>{questionIndex + 1}</span> / {interviewQuestions.length}
										</div>
										<h3>
											{interviewQuestions[questionIndex].sequence + ') '}
											{interviewQuestions[questionIndex].questionContent}
										</h3>
									</div>
								)}

								<div className="number_word">{myAnswer.length} / 2000자</div>

								<div className="question_btn_wrap">
									<button
										className={
											'question_btn_basic back_btn' + (questionIndex === 0 ? 'disabled_btn' : '')
										}
										onClick={handlePrevBtn}
										disabled={questionIndex === 0 && true}
									>
										이전
									</button>
									{questionIndex !== interviewQuestions.length - 1 ? (
										<button className="question_btn_basic next_btn" onClick={handleNextBtn}>
											다음
										</button>
									) : (
										<button className="question_btn_basic next_btn" onClick={onOpenModal}>
											완료
										</button>
									)}
								</div>
							</div>
							<div className="write_area_wrap">
								<div className="my_write_wrap">
									<textarea
										placeholder="작성해주세요"
										onChange={handleInput}
										value={myAnswer}
										maxLength="2000"
										ref={textAreaRef}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InterviewTestDetail;
