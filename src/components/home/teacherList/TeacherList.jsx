import React, { useState } from 'react';
import style from '@/components/home/teacherList/TeacherList.module.scss';
import 'swiper/swiper.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import teacher01 from '@/assets/images/image/teacher01.png';
import teacher02 from '@/assets/images/image/teacher02.png';
import mobileBar from '@/assets/images/mobile/mobile_teacher_bar.png';
import mobileTitle from '@/assets/images/mobile/mobile_teacher_title.png';
import data from '@/data/data';
import Profile from './Profile';
import TeacherCard from './TeacherCard';

const TeacherList = () => {
	const width = window.innerWidth;
	const [mobile, setMobile] = useState(width);
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

	const swiperParams = {
		centerInsufficientSlides: true,
		slidesPerView: 4.3,
	};
	const swiperStyle = {
		overflow: 'visible',
	};

	return (
		<section className={style.teacher}>
			{mobile < 401 ? (
				<img src={mobileBar} alt="상단바" style={{ width: 100 + '%' }} className={style.bar} />
			) : (
				<img src={teacher01} alt="상단바" style={{ width: 100 + '%' }} />
			)}
			<div className={style.container}>
				{mobile < 401 ? <img src={mobileTitle} alt="title" /> : <img src={teacher02} alt="title" />}
				<div className={style.profile}>
					<Profile
						key={selectedTeacher.name}
						name={selectedTeacher.name}
						image={selectedTeacher.image}
						subject={selectedTeacher.subject}
						recode={selectedTeacher.recode}
					/>
				</div>
				{mobile < 401 ? (
					<Swiper className={style.teacher_list} {...swiperParams} style={swiperStyle}>
						{teacherList.map((teacher, idx) => {
							return (
								<SwiperSlide key={teacher.name} onClick={() => selectTeacher(idx)}>
									<TeacherCard imageList={teacher.image_list} isSelected={teacher.is_selected} />
								</SwiperSlide>
							);
						})}
					</Swiper>
				) : (
					<ul className={style.teacher_list}>
						{teacherList.map((teacher, idx) => {
							return (
								<li key={teacher.name} onClick={() => selectTeacher(idx)}>
									<TeacherCard imageList={teacher.image_list} isSelected={teacher.is_selected} />
								</li>
							);
						})}
					</ul>
				)}
			</div>
		</section>
	);
};

export default TeacherList;
