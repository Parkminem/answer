import React from 'react';
import style from '@/components/myPage/DiagnosticHistory.module.scss';
import SectionCard from '../UI/SectionCard';

export default function DiagnosticHistory() {
	return (
		<SectionCard>
			<div className={style.diagnostic_history}>
				<table>
					<tr>
						<th>면접 진단 유형</th>
						<th>면접 진단 일시</th>
					</tr>
					<td>공무원</td>
					<td>2023년 01월 01일</td>
				</table>
			</div>
		</SectionCard>
	);
}
