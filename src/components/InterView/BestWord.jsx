/* eslint-disable react/prop-types */
import React from 'react';

const BestWord = ({ rank, title }) => {
	return (
		<li>
			<span>{rank}</span>
			<div className="best_word">{title}</div>
		</li>
	);
};

export default BestWord;
