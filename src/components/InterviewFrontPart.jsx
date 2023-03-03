import React, { useState } from 'react';
import style from '@/components/InterviewFrontPart.module.scss';
import { useRecoilState } from 'recoil';
import { answerList, repliesState, textCountState } from '@/store/interview';

export default function InterviewFrontPart({ typeDetail, questionIndex }) {
	const [textCount, setTextCount] = useRecoilState(textCountState);
	const [replyContent, setReplyContent] = useRecoilState(answerList);
	const [replies, setReplies] = useRecoilState(repliesState);
	const width = window.innerWidth;
	const [mobile, setMobile] = useState(width);

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
					{mobile > 400 && <>&nbsp;</>}
					{questionIndex < 5 &&
						typeDetail &&
						typeDetail.responseInterviewQuestions[questionIndex].questionContent}
				</span>
			</div>
			<div className={style.textarea_box}>
				<div className={style.box}>
					<textarea
						name="interview_content"
						id="interview_content"
						onChange={(e) => handletextCount(e)}
					></textarea>
				</div>
			</div>
			{mobile > 401 && <p>{textCount}/2000자</p>}
		</div>
	);
}
