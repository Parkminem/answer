import React, { useState } from 'react';
import style from '@/components/InterviewFrontPart.module.scss';
import { useRecoilState } from 'recoil';
import { answerList } from '@/store/interview';

export default function InterviewFrontPart({ typeDetail, questionIndex }) {
	const [textCount, setTextCount] = useState('');
	const [replyContent, setReplyContent] = useRecoilState(answerList);

	const handletextCount = (e) => {
		setTextCount(e.target.value.length);
		setReplyContent(e.target.value);
	};

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
				<form>
					<textarea
						name="interview_content"
						id="interview_content"
						onChange={(e) => handletextCount(e)}
					></textarea>
				</form>
			</div>
			<p>{textCount}/2000자</p>
		</div>
	);
}
