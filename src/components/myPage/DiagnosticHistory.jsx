import React from 'react';
import style from '@/components/myPage/DiagnosticHistory.module.scss';
import InterviewTab from '../InterviewTab';

export default function DiagnosticHistory() {
	return (
		<>
			<InterviewTab />
			<div className={style.diagnostic_history}>
				<table>
					<thead>
						<tr>
							<th>면접 진단 유형</th>
							<th>면접 진단 일시</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>공무원</td>
							<td>2023년 01월 01일</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
}
