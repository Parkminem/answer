import React from 'react';
import TextBoxNumber from '@/components/interView/TextBoxNumber';
import { noticeableAnswersState } from '@/store/interview';
import { useRecoilState } from 'recoil';

const TextBoxNumberList = () => {
	const [noticeableAnswers, setNoticeableAnswers] = useRecoilState(noticeableAnswersState);

	return (
		<ul className="text_box_nuber">
			{noticeableAnswers.map((v, i) => (
				<TextBoxNumber key={v + i} content={v} />
			))}
		</ul>
	);
};

export default TextBoxNumberList;
