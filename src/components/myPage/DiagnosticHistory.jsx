import React from 'react';
import style from '@/components/myPage/DiagnosticHistory.module.scss';
import InterviewTab from '@/components/InterviewTab';
import data from '@/data/data';
import { useNavigate } from 'react-router-dom';

export default function DiagnosticHistory() {
	const tableData = data.diagnostic_detail;
	const navigate = useNavigate();

	const onDetail = () => {
		navigate('/mypage/diagnostic_detail');
	};

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
						{tableData.map((item) => {
							return (
								<tr key={item.id} onClick={() => onDetail()}>
									<td>{item.type}</td>
									<td>{item.date}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
}
