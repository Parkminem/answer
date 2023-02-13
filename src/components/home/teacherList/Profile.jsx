import React from 'react';
import style from '@/components/home/teacherList/Profile.module.scss';

export default function Profile({ name, subject, recode, image }) {
	return (
		<div className={style.profile}>
			<div className={style.photo} style={{ backgroundImage: `url(${image})` }}></div>
			<div className={style.right_box}>
				<p className={style.subject}>{subject}</p>
				<h1 className={style.name}>
					{name}
					<span className={style.name_position}> 강사님</span>
				</h1>
				<div className={style.recode_box}>
					<div className={style.recode_content}>
						<p className={style.history}>주요 이력</p>
						<p className={style.recode}>
							{recode.split('\n').map((line) => {
								return (
									<span key={line}>
										{line}
										<br />
									</span>
								);
							})}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
