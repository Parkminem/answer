import React, { useState } from 'react';
import style from '@/components/InterviewFrontPart.module.scss';

export default function InterviewFrontPart({ typeDetail, questionIndex, onNext }) {
	const width = window.innerWidth;
	const [mobile, setMobile] = useState(width);
	const [textValue, setTextValue] = useState('');

	const handleSetValue = (e) => {
		setTextValue(e.target.value.length);
	};

	return (
		<div className={style.front_part}>
			<div className={style.question}>
				<span className={style.question_number}>
					{questionIndex < 5 && typeDetail && typeDetail.responseInterviewQuestions[questionIndex].sequence}.
				</span>
				<span className={style.question_sentence}>
					{mobile > 400 && <>&nbsp;</>}
					{questionIndex < 5 &&
						typeDetail &&
						typeDetail.responseInterviewQuestions[questionIndex].questionContent}
				</span>
			</div>
			<div className={style.textarea_box}>
				<form>
					<textarea
						name="interview_content"
						id="interview_content"
						onChange={(e) => handleSetValue(e)}
					></textarea>
				</form>
			</div>
			{mobile > 401 && <p>{textValue}/2000자</p>}
		</div>
	);
}
