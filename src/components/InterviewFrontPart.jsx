import React, { useState, useEffect } from 'react';
import style from '@/components/InterviewFrontPart.module.scss';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { textCountState } from '@/store/interview';
import { textAtom, textLengthAtom } from '@/store/diagnosis';

export default function InterviewFrontPart({ index, title }) {
	const [textCount, setTextCount] = useRecoilState(textLengthAtom);
	const width = window.innerWidth;
	const [mobile, setMobile] = useState(width);

	//쏘히
	const [text, setText] = useRecoilState(textAtom);
	const handletextCount = (e) => {
		setTextCount(e.target.value.length);
		setText(e.target.value);
	};

	return (
		<div className={style.front_part}>
			<div className={style.question}>
				<span className={style.question_number}>{`Q${index}.`}</span>
				<span className={style.question_sentence}>
					{mobile > 480 && <>&nbsp;</>}
					{title}
				</span>
			</div>
			<div className={style.textarea_box}>
				<div className={style.box}>
					<textarea
						name="interview_content"
						id="interview_content"
						onChange={(e) => handletextCount(e)}
						value={text}
					></textarea>
				</div>
			</div>
			{mobile > 480 && <p>{textCount}/2000자</p>}
		</div>
	);
}
