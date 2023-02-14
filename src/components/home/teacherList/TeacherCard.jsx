import React from 'react';
import style from '@/components/home/teacherList/TeacherCard.module.scss';
import selectorImage from '@/assets/images/image/selector.png';

export default function TeacherCard({ imageList, isSelected }) {
	return (
		<div className={style.cards}>
			{isSelected && <img className={style.selector} src={selectorImage} alt="Select Teacher" />}
			<img className={style.card} src={imageList} alt="Teacher List Image" />
		</div>
	);
}
