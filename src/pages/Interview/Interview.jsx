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
import { useRecoilState, useResetRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import _ from 'lodash';
import { history } from '@/router/history';
import ReactModal from 'react-modal';
import { typeListAtom, answerListAtom, textAtom, textLengthAtom } from '@/store/diagnosis';
import { tendencyState } from '@/store/interview';

ReactModal.setAppElement('#root');
const modalStyle = {
	overlay: {
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(255, 255, 255, 0.45)',
		zIndex: 10,
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		background: '#FFFFFF',
		overflow: 'auto',
		top: '42vh',
		left: '38vw',
		right: '38vw',
		bottom: '42vh',
		WebkitOverflowScrolling: 'touch',
		borderRadius: '14px',
		outline: 'none',
		zIndex: 10,
	},
};
const mobileModalStyle = {
	overlay: {
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(255, 255, 255, 0.45)',
		zIndex: 10,
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		background: '#FFFFFF',
		overflow: 'auto',
		top: '40vh',
		left: '-3vw',
		right: '-3vw',
		bottom: '40vh',
		WebkitOverflowScrolling: 'touch',
		borderRadius: '14px',
		outline: 'none',
		zIndex: 10,
	},
};

const Interview = () => {
	const cx = classNames.bind(styles);
	const navigate = useNavigate();
	const width = window.innerWidth;
	const [mobile, setMobile] = useState(width);
	const [ready, setReady] = useState(false);
	const [modalIsOpen, setModalIsOpen] = useState(false);

	//쏘히
	const [types, setTypes] = useRecoilState(typeListAtom);
	const [answers, setAnswers] = useRecoilState(answerListAtom);
	const [step, setStep] = useState();
	const [title, setTitle] = useState();
	const [progressWidth, setProgressWidth] = useState(3);
	const resetTendency = useResetRecoilState(tendencyState);
	const resetAnswers = useResetRecoilState(answerListAtom);
	const [textLength, setTextLength] = useRecoilState(textLengthAtom);

	//textarea에 들어갈 값
	const [nowText, setNowText] = useRecoilState(textAtom);

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

	//타입 불러오기
	useEffect(() => {
		async function callType() {
			try {
				const getType = await interviewApi.getInterviewType();
				setTypes(getType.data);
			} catch (err) {
				console.log(err);
			}
		}
		callType();
	}, []);

	//특정 타입 질문 불러오기
	const callQuestion = async (code) => {
		try {
			const qnaList = await interviewApi.getDetailInterviewType(code);
			setAnswers((prev) => {
				let copyArr = JSON.parse(JSON.stringify(prev));
				copyArr.userCode = window.localStorage.getItem('code');
				copyArr.interviewTypeCode = qnaList.data.interviewTypeCode;
				const detailArr = qnaList.data.responseInterviewQuestions.map((i) => {
					return {
						interviewQuestionCode: i.interviewQuestionCode,
						interviewQuestionContent: i.questionContent,
						interviewReplyContent: '',
					};
				});
				copyArr.requestInterviewReplyDetails = detailArr;
				const propensityDetailArr = qnaList.data.responsePropensityQuestions.map((i) => {
					return {
						propensitySurveyQuestionCode: i.propensitySurveyQuestionCode,
						propensitySurveyQuestionContent: i.questionContent,
						measure: i.measure,
						scoringBackwards: i.scoringBackwards,
						replyContent: '',
					};
				});
				copyArr.requestPropensityReplyDetails = propensityDetailArr;
				return copyArr;
			});
			setReady(true);
			setStep(1);
			setProgressWidth(3);
			resetTendency();
		} catch (err) {
			console.log(err);
		}
	};

	//주관식 문제
	useEffect(() => {
		if (step <= answers.requestInterviewReplyDetails.length) {
			setTitle(answers.requestInterviewReplyDetails[step - 1].interviewQuestionContent);
			setNowText(answers.requestInterviewReplyDetails[step - 1].interviewReplyContent);
		} else {
			setTitle('');
			setNowText('');
		}
	}, [step, answers]);

	//다음 버튼 클릭
	const onNext = () => {
		if (step < 5) {
			if (textLength < 300) {
				alert('글자수는 최소 300자 이상입니다.');
				return false;
			} else {
				setAnswers((prev) => {
					let copyArr = JSON.parse(JSON.stringify(prev));
					copyArr.requestInterviewReplyDetails[step - 1].interviewReplyContent = nowText;
					return copyArr;
				});
				setNowText(answers.requestInterviewReplyDetails[step].interviewReplyContent);
				setTextLength(answers.requestInterviewReplyDetails[step].interviewReplyContent.length);
			}
		} else if (step == 5) {
			if (textLength < 300) {
				alert('글자수는 최소 300자 이상입니다.');
				return false;
			} else {
				setAnswers((prev) => {
					let copyArr = JSON.parse(JSON.stringify(prev));
					copyArr.requestInterviewReplyDetails[step - 1].interviewReplyContent = nowText;
					return copyArr;
				});
			}
		} else if (step == 6) {
			let result = [];
			for (let i = 0; i < 5; i++) {
				result.push(answers.requestPropensityReplyDetails[i]);
			}
			const emptyCount = result.filter((i) => {
				return i.replyContent == '';
			});
			if (emptyCount.length > 0) {
				alert('모든 답변을 선택하셔야 합니다.');
				return false;
			}
		} else if (step == 7) {
			let result = [];
			for (let i = 5; i < 10; i++) {
				result.push(answers.requestPropensityReplyDetails[i]);
			}
			const emptyCount = result.filter((i) => {
				return i.replyContent == '';
			});
			if (emptyCount.length > 0) {
				alert('모든 답변을 선택하셔야 합니다.');
				return false;
			}
		} else if (step == 8) {
			let result = [];
			for (let i = 10; i < 15; i++) {
				result.push(answers.requestPropensityReplyDetails[i]);
			}
			const emptyCount = result.filter((i) => {
				return i.replyContent == '';
			});
			if (emptyCount.length > 0) {
				alert('모든 답변을 선택하셔야 합니다.');
				return false;
			}
		} else if (step == 9) {
			let result = [];
			for (let i = 15; i < 20; i++) {
				result.push(answers.requestPropensityReplyDetails[i]);
			}
			const emptyCount = result.filter((i) => {
				return i.replyContent == '';
			});
			if (emptyCount.length > 0) {
				alert('모든 답변을 선택하셔야 합니다.');
				return false;
			}
		}
		setStep((prev) => {
			return prev + 1;
		});
		setProgressWidth((prev) => {
			return prev + 10;
		});
	};

	//이전 버튼 클릭
	const onPrev = () => {
		if (step < 5) {
			setAnswers((prev) => {
				let copyArr = JSON.parse(JSON.stringify(prev));
				copyArr.requestInterviewReplyDetails[step - 1].interviewReplyContent = nowText;
				return copyArr;
			});
			setNowText(answers.requestInterviewReplyDetails[step - 2].interviewReplyContent);
			setTextLength(answers.requestInterviewReplyDetails[step - 2].interviewReplyContent.length);
		} else if (step == 5) {
			setAnswers((prev) => {
				let copyArr = JSON.parse(JSON.stringify(prev));
				copyArr.requestInterviewReplyDetails[step - 1].interviewReplyContent = nowText;
				return copyArr;
			});
		}
		setStep((prev) => {
			return prev - 1;
		});
		setProgressWidth((prev) => {
			return prev - 10;
		});
	};

	//객관식 랜더링
	const rendering = () => {
		const result = [];
		switch (step) {
			case 6:
				for (let i = 0; i < 5; i++) {
					result.push(
						<div className={cx('tendency-wrap')} key={i}>
							<Tendency item={answers.requestPropensityReplyDetails[i]} index={6 + i} step={step} />
						</div>,
					);
				}
				break;
			case 7:
				for (let i = 5; i < 10; i++) {
					result.push(
						<div className={cx('tendency-wrap')} key={i}>
							<Tendency item={answers.requestPropensityReplyDetails[i]} index={6 + i} />
						</div>,
					);
				}
				break;
			case 8:
				for (let i = 10; i < 15; i++) {
					result.push(
						<div className={cx('tendency-wrap')} key={i}>
							<Tendency item={answers.requestPropensityReplyDetails[i]} index={6 + i} />
						</div>,
					);
				}
				break;
			case 9:
				for (let i = 15; i < 20; i++) {
					result.push(
						<div className={cx('tendency-wrap')} key={i}>
							<Tendency item={answers.requestPropensityReplyDetails[i]} index={6 + i} />
						</div>,
					);
				}
				break;
			case 10:
				for (let i = 20; i < 23; i++) {
					result.push(
						<div className={cx('tendency-wrap')} key={i}>
							<Tendency item={answers.requestPropensityReplyDetails[i]} index={6 + i} />
						</div>,
					);
				}
				break;
		}
		return result;
	};

	//제출
	const onSubmit = () => {
		let result = [];
		for (let i = 20; i < 23; i++) {
			result.push(answers.requestPropensityReplyDetails[i]);
		}
		const emptyCount = result.filter((i) => {
			return i.replyContent == '';
		});
		if (emptyCount.length > 0) {
			alert('모든 답변을 선택하셔야 합니다.');
			return false;
		} else {
			setModalIsOpen(true);
		}
	};

	const handleSubmit = async () => {
		const userCode = window.localStorage.getItem('code');
		await interviewApi
			.getSubmitInterviewList(userCode, answers)
			.then((res) => {
				alert('제출이 완료되었습니다.');
				let type = res.data.interviewTypeCode;
				let resultType;
				switch (type) {
					case 1:
						resultType = '공기업';
						break;
					case 2:
						resultType = '공무원';
						break;
					case 3:
						resultType = '간호사';
						break;
					case 4:
						resultType = '대입수시';
						break;
				}
				navigate(
					`/mypage/diagnostic_detail?code=${res.data.interviewReplyCode}&type=${encodeURIComponent(
						resultType,
					)}&date=${encodeURIComponent(res.data.replyDate)}`,
				);
				resetTendency();
				resetAnswers();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<Beforeunload onBeforeunload={() => '새로고침 시 면접진단이 종료됩니다. 새로고침 하시겠습니까?'}>
			{mobile < 481 && <MobileSideBar />}
			<PageCard>
				<InterviewSideBar ready={ready} callQuestion={callQuestion} title={title} index={step} />
				{ready ? (
					<div className={cx('container')}>
						<InterviewProgressBar width={progressWidth} />
						{answers && step <= answers.requestInterviewReplyDetails.length ? (
							<InterviewFrontPart index={step} title={title} />
						) : (
							<>{rendering()}</>
						)}
						{step == 10 ? (
							<InterviewEndBtns onPrev={onPrev} onSubmit={onSubmit} />
						) : (
							<InterviewBtns idx={step} onNext={onNext} onPrev={onPrev} />
						)}
					</div>
				) : (
					<div className={cx('container')}></div>
				)}
			</PageCard>
			<ReactModal
				isOpen={modalIsOpen}
				style={mobile > 480 ? modalStyle : mobileModalStyle}
				onRequestClose={() => {
					setModalIsOpen(false);
				}} // 오버레이나 esc를 누르면 핸들러 동작
				ariaHideApp={false}
			>
				<div className={styles.content}>
					<p>답변을 제출하시겠습니까?</p>
					<div className={styles.content__button}>
						<button
							className={styles.content__button__back}
							onClick={() => {
								setModalIsOpen(false);
							}}
						>
							뒤로가기
						</button>
						<button className={styles.content__button__submit} onClick={handleSubmit}>
							제출하기
						</button>
					</div>
				</div>
			</ReactModal>
		</Beforeunload>
	);
};

export default Interview;
