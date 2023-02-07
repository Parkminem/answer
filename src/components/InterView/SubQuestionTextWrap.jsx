/* eslint-disable react/prop-types */
import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const SubQuestionTextWrap = ({ index, question, keyWord, content }) => {
	return (
		<div className="sub_question_text_wrap">
			<p className="sub_question_text">
				<span>{index}.</span> {question}
			</p>
			<div className="text_box_basic">
				<div className="text_box_p">
					<div className="point_text">
						<span>핵심 문장</span>
						<span className="material-icons" style={{ padding: '0 5px' }}>
							<PlayArrowIcon />
						</span>
						{keyWord}
					</div>
					<p>{content}</p>
				</div>
			</div>
		</div>
	);
};

export default SubQuestionTextWrap;
