import React, { useState, useEffect } from 'react';
import style from '@/components/myPage/DiagnosticHistory.module.scss';
import InterviewTab from '@/components/InterviewTab';
import { useNavigate } from 'react-router-dom';
import interviewApi from '@/apis/api/interview';

export default function DiagnosticHistory() {
	const [empty, setEmpty] = useState(true);
	const [list, setList] = useState();
	const navigate = useNavigate();

	//상세 페이지로 이동
	const detailHandler = (e) => {
		const replyCode = e.target.dataset.code;
		const type = e.target.dataset.type;
		const date = e.target.dataset.date;
		navigate(
			`/mypage/diagnostic_detail?code=${replyCode}&type=${encodeURIComponent(type)}&date=${encodeURIComponent(
				date,
			)}`,
		);
	};

	/**
	 * 면접 내역 리스트 불러오기
	 * @author sohee
	 */
	useEffect(() => {
		const code = localStorage.getItem('code');
		async function getHistory() {
			await interviewApi
				.getUserAnswerList(code)
				.then((res) => {
					if (res.data === '') {
						setEmpty(true);
					} else {
						setList(res.data);
						setEmpty(false);
					}
				})
				.catch((err) => {});
		}
		getHistory();
	}, []);

	/**
	 * 날짜 표시 년,월,일 로 변경
	 * @param {date객체} date
	 * @returns yyyy년 mm월 dd일
	 */
	const formatDate = (date) => {
		const yyyy = date.getFullYear();
		const year = yyyy > 10 ? yyyy : `0${yyyy}`;
		const mm = 1 + date.getMonth();
		const month = mm > 10 ? mm : `0${mm}`;
		const dd = date.getDate();
		const day = dd > 10 ? dd : `0${dd}`;
		return `${year}년 ${month}월 ${day}일`;
	};

	return (
		<>
			<InterviewTab title="면접 진단 내역" />
			<div className={style.diagnostic_history}>
				{!empty ? (
					//리스트 있을 때
					<table>
						<thead>
							<tr>
								<th>면접 진단 유형</th>
								<th>면접 진단 일시</th>
							</tr>
						</thead>
						<tbody>
							{list.map((item) => {
								return (
									<tr
										key={item.interviewReplyCode}
										onClick={detailHandler}
										data-code={item.interviewReplyCode}
										data-type={item.interviewType}
										data-date={item.replyDate}
									>
										<td
											data-code={item.interviewReplyCode}
											data-type={item.interviewType}
											data-date={item.replyDate}
										>
											{item.interviewType}
										</td>
										<td
											data-code={item.interviewReplyCode}
											data-type={item.interviewType}
											data-date={item.replyDate}
										>
											{formatDate(new Date(item.replyDate))}
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				) : (
					//리스트 없을 때
					<>
						<table>
							<thead>
								<tr>
									<th>면접 진단 유형</th>
									<th>면접 진단 일시</th>
								</tr>
							</thead>
							<tbody>
								<tr style={{ cursor: 'default' }}>
									<td style={{ cursor: 'default' }}>-</td>
									<td style={{ cursor: 'default' }}>-</td>
								</tr>
								<tr style={{ cursor: 'default' }}>
									<td style={{ cursor: 'default' }}>-</td>
									<td style={{ cursor: 'default' }}>-</td>
								</tr>
							</tbody>
						</table>
						<div className={style['empty-box']}>
							<div className={style['empty-box__text']}>
								<p>면접 진단내역이 없습니다.</p>
								<p>지금 시작해보세요!</p>
							</div>
							<button onClick={() => navigate('/interview')}>
								<span>면접 진단 하러가기 &nbsp;&nbsp;&nbsp;&gt;</span>
							</button>
						</div>
					</>
				)}
			</div>
		</>
	);
}
