import React, { useState } from 'react';
import style from '@/components/InterviewFrontPart.module.scss';

export default function InterviewFrontPart({ typeDetail, questionIndex }) {
	return (
		<div className={style.front_part}>
			<div className={style.question}>
				<span className={style.question_number}>
					{questionIndex < 5 && typeDetail && typeDetail.responseInterviewQuestions[questionIndex].sequence}.
				</span>
				<span className={style.question_sentence}>
					&nbsp;
					{questionIndex < 5 &&
						typeDetail &&
						typeDetail.responseInterviewQuestions[questionIndex].questionContent}
				</span>
			</div>
			<div className={style.textarea_box}>
				<form action="">
					<textarea name="interview_content" id="interview_content"></textarea>
				</form>
			</div>
			<p>10/2000자</p>
		</div>
	);
}
