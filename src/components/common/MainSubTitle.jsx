import React from 'react';

const MainSubTitle = (props) => {
	return (
		<div className="">
			<div className="">
				<span>{props.number}</span>
				<h1>{props.title}</h1>
			</div>
			<div className="">
				<p>{props.subText}</p>
				<h2>{props.mainText}</h2>
			</div>
		</div>
	);
};

export default MainSubTitle;
