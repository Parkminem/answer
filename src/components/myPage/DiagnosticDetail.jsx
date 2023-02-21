import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import style from '@/components/myPage/DiagnosticDetail.module.scss';
import InterviewTab from '@/components/InterviewTab';
import DiagnosticContent from '@/components/myPage/DiagnosticContent';
import interviewApi from '@/apis/api/interview';
import { formatDate } from '@/modules/date';

export default function DiagnosticDetail() {
	const [searchParams] = useSearchParams();
	const [answer, setAnswer] = useState();
	const [date, setDate] = useState();
	const [type, setType] = useState();

	useEffect(() => {
		const code = searchParams.get('code');
		const queryDate = searchParams.get('date');
		const queryType = searchParams.get('type');
		interviewApi
			.getDetailAnswer(code)
			.then((res) => {
				setType(queryType);
				setDate(formatDate(new Date(queryDate)));
				setAnswer(res.data);
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<>
			<InterviewTab title="면접 진단 내용" />
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
						<button>
							<span>면접 피드백&nbsp;&nbsp;&nbsp;&nbsp;&gt;</span>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
