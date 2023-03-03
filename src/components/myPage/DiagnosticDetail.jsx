import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import style from '@/components/myPage/DiagnosticDetail.module.scss';
import InterviewTab from '@/components/InterviewTab';
import DiagnosticContent from '@/components/myPage/DiagnosticContent';
import MobileInterviewTap from '@/components/myPage/MobileInterviewTap';
import interviewApi from '@/apis/api/interview';
import { formatDate } from '@/modules/date';

export default function DiagnosticDetail() {
	const cx = classNames.bind(style);
	const width = window.innerWidth;
	const [mobile, setMobile] = useState(width);
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const [answer, setAnswer] = useState();
	const [replyCode, setReplyCode] = useState();
	const [date, setDate] = useState();
	const [type, setType] = useState();

	useEffect(() => {
		const code = searchParams.get('code');
		const queryDate = searchParams.get('date');
		const queryType = searchParams.get('type');
		async function getDetail() {
			await interviewApi
				.getDetailAnswer(code)
				.then((res) => {
					setType(queryType);
					setDate(formatDate(new Date(queryDate)));
					setAnswer(res.data);
					setReplyCode(code);
				})
				.catch((err) => console.log(err));
		}
		getDetail();
	}, []);

	/**
	 * 피드백 페이지로 이동
	 */
	const feedbackHandler = () => {
		navigate(`/mypage/feedback?code=${replyCode}&type=${type}&date=${encodeURIComponent(date)}`);
	};

	return (
		<>
			{mobile < 481 ? (
				<MobileInterviewTap title={`면접 진단 내역 > 진단 상세 - ${type}`} />
			) : (
				<InterviewTab title="면접 진단 내용" />
			)}
			{mobile < 481 ? (
				<div className={cx('detail')}>
					<div className={cx('detail__inner')}>
						<div className={cx('detail__info-box')}>
							<h1>{type}</h1>
							<p>
								<span>작성일</span>
								<span>{date}</span>
							</p>
						</div>
						<ul>
							{answer &&
								answer.map((item, idx) => {
									return (
										<li key={idx}>
											<div className={cx('text-box')}>
												<div className={cx('question')}>
													<span className={cx('num')}>{`Q${idx + 1}.`}</span>
													<p>{item.questionContent}</p>
												</div>
												<div className={cx('answer')}>
													<p>{item.interviewReplyContent}</p>
												</div>
											</div>
										</li>
									);
								})}
						</ul>
					</div>
					<div className={cx('detail__btn-box')}>
						<button onClick={feedbackHandler}>
							<span>면접 피드백 &nbsp;&gt;</span>
						</button>
					</div>
				</div>
			) : (
				<div className={style.diagnostic}>
					<div className={style.container}>
						<p>이전에 작성한 면접 진단 내용을 확인할 수 있습니다.</p>
						<div className={style.title}>
							<ul className={style.type}>
								<li className={style.type}>{type}</li>
							</ul>
							<div className={style.content_info}>
								<h2 className={style.auth}>작성자 &nbsp; | &nbsp; 김앤써</h2>
								<h2 className={style.date}>작성일 &nbsp; | &nbsp; {date}</h2>
							</div>
						</div>
						<hr width="100%" />
						<div className={style.url_copy}>
							<p>Http://www.answer.com/myanswer/answer123</p>
							<button>주소복사</button>
						</div>
						<div className={style.content_box}>
							{answer &&
								answer.map((item, idx) => {
									return (
										<DiagnosticContent
											key={idx}
											number={idx + 1}
											title={item.questionContent}
											value={item.interviewReplyContent}
										/>
									);
								})}
						</div>
						<div className={style['feedback-btn-box']}>
							<button onClick={feedbackHandler}>
								<span>면접 피드백&nbsp;&nbsp;&nbsp;&nbsp;&gt;</span>
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
