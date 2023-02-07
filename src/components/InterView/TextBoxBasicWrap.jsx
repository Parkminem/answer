/* eslint-disable react/prop-types */
import React from 'react';

const TextBoxBasicWrap = ({ title, subtitle }) => {
	return (
		<h4 className="text_box_h4">
			{title} <span>{subtitle ?? ''}</span>
		</h4>
	);
};

export default TextBoxBasicWrap;
