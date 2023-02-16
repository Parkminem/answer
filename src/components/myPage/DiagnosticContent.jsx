import React from 'react';
import style from '@/components/myPage/DiagnosticContent.module.scss';

export default function DiagnosticContent({ number, title }) {
	return (
		<div className={style.content}>
			<div className={style.title}>
				<h1 className={style.title_number}>Q{number}.</h1>
				<h2 className={style.title_title}>{title}</h2>
			</div>
			<textarea name="diagnostic_content" id=""></textarea>
		</div>
	);
}
