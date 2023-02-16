import React from 'react';
import style from '@/components/myPage/DiagnosticDetail.module.scss';
import InterviewTab from '../InterviewTab';
import DiagnosticContent from './DiagnosticContent';

export default function DiagnosticDetail() {
	return (
		<>
			<InterviewTab />
			<div className={style.diagnostic}>
				<div className={style.container}>
					<p>이전에 작성한 면접 진단 내용을 확인할 수 있습니다.</p>
					<div className={style.title}>
						<ul className={style.type}>
							<li className={style.type}>공무원</li>
						</ul>
						<div className={style.content_info}>
							<h2 className={style.auth}>작성자 &nbsp; | &nbsp; 김앤써</h2>
							<h2 className={style.date}>작성일 &nbsp; | &nbsp; 2023.01.01</h2>
						</div>
					</div>
					<hr width="100%" />
					<div className={style.url_copy}>
						<p>Http://www.answer.com/myanswer/answer123</p>
						<button>주소복사</button>
					</div>
					<div className={style.content_box}>
						<DiagnosticContent number={1} title={'1분 자기 소개'} />
						<DiagnosticContent number={2} title={'성격의 장단점'} />
						<DiagnosticContent number={3} title={'향후 포부'} />
					</div>
				</div>
			</div>
		</>
	);
}
