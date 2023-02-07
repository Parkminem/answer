import React from 'react';

// eslint-disable-next-line react/prop-types
const Subheading = ({ title, content }) => {
	return (
		<div className="top_tit_wrap">
			<h2>{title}</h2>
			<p>{content}</p>
		</div>
	);
};

export default Subheading;
