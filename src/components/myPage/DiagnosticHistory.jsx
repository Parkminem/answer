import React, { useState, useEffect } from 'react';
import style from '@/components/myPage/DiagnosticHistory.module.scss';
import InterviewTab from '@/components/InterviewTab';
import data from '@/data/data';
import { useNavigate } from 'react-router-dom';
import interviewApi from '@/apis/api/interview';

export default function DiagnosticHistory() {
	const tableData = data.diagnostic_detail;
	const [empty, setEmpty] = useState(true);
	const [list, setList] = useState();
	const navigate = useNavigate();

	const onDetail = () => {
		navigate('/mypage/diagnostic_detail');
	};

	useEffect(() => {
		const code = localStorage.getItem('code');
		interviewApi
			.getUserAnswerList(code)
			.then((res) => {
				if (res.data === '') {
					setEmpty(true);
				} else {
					setList(res.data);
					setEmpty(false);
				}
			})
			.catch((err) => console.log(err));
	}, []);

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
			<InterviewTab />
			<div className={style.diagnostic_history}>
				{!empty ? (
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
									<tr key={item.interviewReplyCode} onClick={() => onDetail()}>
										<td>{item.interviewType}</td>
										<td>{formatDate(new Date(item.replyDate))}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				) : (
					<>
						<table>
							<thead>
								<tr>
									<th>면접 진단 유형</th>
									<th>면접 진단 일시</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>-</td>
									<td>-</td>
								</tr>
								<tr>
									<td>-</td>
									<td>-</td>
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
