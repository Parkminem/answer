import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from '@/components/myPage/Feedback.module.scss';
import InterviewTab from '@/components/InterviewTab';
import MobileInterviewTap from '@/components/mypage/MobileInterviewTap';
import TeacherModal from '@/components/myPage/TeacherModal';
import arrow from '@/assets/images/common/arrow_left_02.png';
import interviewApi from '@/apis/api/interview';

const Feedback = () => {
	const width = window.innerWidth;
	const [mobile, setMobile] = useState(width);
	const cx = classNames.bind(styles);
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const [modal, setModal] = useState(false);
	const [date, setDate] = useState();
	const [type, setType] = useState();
	const [summary, setSummary] = useState();
	const [point, setPoint] = useState();
	const [sentence, setSentence] = useState();
	const [words, setWords] = useState();

	// useEffect(() => {
	// 	const code = searchParams.get('code');
	// 	const queryType = searchParams.get('type');
	// 	const queryDate = searchParams.get('date');
	// 	setType(queryType);
	// 	setDate(queryDate);
	// 	async function getFeedback() {
	// 		await interviewApi
	// 			.getFeedback(code)
	// 			.then((res) => {
	// 				const contents = JSON.parse(res.data.content);
	// 				setSummary(contents[1].AnswersSummary);
	// 				setPoint(contents[2].noticeableAnswers);
	// 				setSentence(contents[3].keySentence);
	// 				setWords(contents[4].wordFreq);
	// 			})
	// 			.catch((err) => {
	// 				if (err.response.status === 500) {
	// 					alert('피드백이 존재하지 않습니다.');
	// 					navigate(-1);
	// 				}
	// 			});
	// 	}
	// 	getFeedback();
	// }, []);

	/**
	 * 모달창 온오프
	 */
	const onClose = () => {
		setModal(false);
	};
	const onOpen = () => {
		setModal(true);
	};

	/**
	 * 이전 페이지로 이동
	 */
	const prevHandler = () => {
		navigate(-1);
	};
	return (
		<>
			{mobile < 401 ? (
				<MobileInterviewTap title="면접 진단 내역 > 면접 피드백" />
			) : (
				<InterviewTab title="면접 진단 내용" />
			)}
			{modal && <TeacherModal onConfirm={onClose} />}
			{mobile < 401 ? (
				<section className={cx('m-feedback')}>
					<div className={cx('m-feedback-inner')}>
						<div className={cx('m-feedback__info-box')}>
							<h1>{type}</h1>
							<p>
								<span>작성일</span>
								<span>{date}</span>
							</p>
						</div>
						<div className={cx('m-feedback__word-box')}>
							<h2>
								가장 많이 언급한 단어 <strong>TOP5</strong>
							</h2>
							<ul className={cx('m-feedback__word-box__list')}>
								{words &&
									words.map((item, idx) => {
										return (
											<li key={idx}>
												<span>{idx + 1}</span>
												<span>{item}</span>
											</li>
										);
									})}
							</ul>
						</div>
						<div className={cx('m-feedback__sentence-box')}>
							<h3>
								면접관이 주목할만한 상위 문장 <strong>TOP3</strong>
							</h3>
							<div className={cx('m-feedback__sentence-box__sentence', 'top3')}>
								{point &&
									point.map((item, idx) => {
										return (
											<p key={idx}>
												<span className={cx('num')}>{idx + 1}.</span>
												{item}
											</p>
										);
									})}
							</div>
						</div>
						<div className={cx('m-feedback__sentence-box')}>
							<h3>전체 답변 요약</h3>
							<div className={cx('m-feedback__sentence-box__sentence')}>
								{summary && <p>{summary[0]}</p>}
							</div>
						</div>
						<div className={cx('m-feedback__sentence-box')}>
							<h3>답변 리스트</h3>
							{sentence &&
								sentence.map((item, idx) => {
									return (
										<div className={cx('m-feedback__sentence-box__desc')} key={idx}>
											<p>
												<span className={cx('num')}>{idx + 1}.</span>
												{item[0] + 1}번째 면접 질문의 {item[1] + 1}번째 문단입니다.
											</p>
											<div className={cx('m-feedback__sentence-box__sentence')}>
												<p>
													<span className={cx('num', 'point')}>핵심 문장 ▶</span>
													{item[2]}
												</p>
											</div>
										</div>
									);
								})}
						</div>
					</div>
					<div className={cx('m-feedback__recommend-box')}>
						<button onClick={onOpen}>
							<span>면접 진단 전문가 추천 &nbsp;&nbsp;&gt;</span>
						</button>
					</div>
				</section>
			) : (
				<section className={cx('feedback')}>
					<div className={cx('feedback__arrow-box')}>
						<button onClick={prevHandler}>
							<img src={arrow} alt="이전" />
						</button>
					</div>
					<div className={cx('feedback-inner')}>
						<div className={cx('feedback__title-box')}>
							<h1>면접 진단 테스트</h1>
							<p>나의 면접 예상 점수는 몇 점일까?</p>
						</div>
						<div className={cx('feedback__recommend-box')}>
							<button onClick={onOpen}>
								<span>면접 진단 전문가 추천</span>
							</button>
						</div>
						<div className={cx('feedback__word-box')}>
							<h2>
								가장 많이 언급한 단어 <strong>TOP5</strong>
							</h2>
							<ul className={cx('feedback__word-box__list')}>
								{words &&
									words.map((item, idx) => {
										return (
											<li key={idx}>
												<span>{idx + 1}</span>
												<span>{item}</span>
											</li>
										);
									})}
							</ul>
						</div>
						<div className={cx('feedback__sentence-box')}>
							<h3>
								면접관이 주목할만한 상위 문장 <strong>TOP3</strong>
							</h3>
							<div className={cx('feedback__sentence-box__sentence', 'top3')}>
								{point &&
									point.map((item, idx) => {
										return (
											<p key={idx}>
												<span className={cx('num')}>{idx + 1}.</span>
												{item}
											</p>
										);
									})}
							</div>
						</div>
						<div className={cx('feedback__sentence-box')}>
							<h3>전체 답변 요약</h3>
							<div className={cx('feedback__sentence-box__sentence')}>
								{summary && <p>{summary[0]}</p>}
							</div>
						</div>
						<div className={cx('feedback__sentence-box')}>
							<h3>답변 리스트</h3>
							{sentence &&
								sentence.map((item, idx) => {
									return (
										<div className={cx('feedback__sentence-box__desc')} key={idx}>
											<p>
												<span className={cx('num')}>0{idx + 1}.</span>
												{item[0] + 1}번째 면접 질문의 {item[1] + 1}번째 문단입니다.
											</p>
											<div className={cx('feedback__sentence-box__sentence')}>
												<p>
													<span className={cx('num', 'point')}>핵심 문장 ▶</span>
													{item[2]}
												</p>
											</div>
										</div>
									);
								})}
						</div>
					</div>
				</section>
			)}
		</>
	);
};

export default Feedback;
