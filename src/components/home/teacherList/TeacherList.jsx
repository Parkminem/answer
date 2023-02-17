import React, { useState } from 'react';
import style from '@/components/home/teacherList/TeacherList.module.scss';
import teacher01 from '@/assets/images/image/teacher01.png';
import teacher02 from '@/assets/images/image/teacher02.png';
import data from '@/data/data';
import Profile from './Profile';
import TeacherCard from './TeacherCard';

const TeacherList = () => {
	const teacherList = data.teacherList;
	const [selectedTeacher, setSelectedTeacher] = useState(teacherList[1]);
	const [isSelected, setIsSelected] = useState(false);
	const selectTeacher = (idx) => {
		setSelectedTeacher(teacherList[idx]);
		setIsSelected(() => {
			const newTeacherList = { ...teacherList };
			teacherList.map((teacher) => (teacher.is_selected = false));
			newTeacherList[idx].is_selected = true;
		});
	};

	return (
		<section className={style.teacher}>
			<img src={teacher01} alt="상단바" style={{ width: 100 + '%' }} />
			<div className={style.container}>
				<img src={teacher02} alt="title" />
				<div className={style.profile}>
					<Profile
						key={selectedTeacher.name}
						name={selectedTeacher.name}
						image={selectedTeacher.image}
						subject={selectedTeacher.subject}
						recode={selectedTeacher.recode}
					/>
				</div>
				<ul className={style.teacher_list}>
					{teacherList.map((teacher, idx) => {
						return (
							<li key={teacher.name} onClick={() => selectTeacher(idx)}>
								<TeacherCard imageList={teacher.image_list} isSelected={teacher.is_selected} />
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};

export default TeacherList;
