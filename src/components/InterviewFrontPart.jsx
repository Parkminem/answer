import React, { useState } from 'react';
import style from '@/components/InterviewFrontPart.module.scss';

export default function InterviewFrontPart() {
	return (
		<div className={style.front_part}>
			<div className={style.question}>
				<span className={style.question_number}>Q5.</span>
				<span className={style.question_sentence}>&nbsp;입사후 포부</span>
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
