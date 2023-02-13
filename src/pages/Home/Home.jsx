import React from 'react';
import CurriculumWrap from '@/components/home/curriculum/CurriculumWrap';
import Title from '@/components/home/title/Title';
import ConsultingWrap from '@/components/home/consulting/ConsultingWrap';
import ReviewWrap from '@/components/home/review/ReviewWrap';
import PassWrap from '@/components/home/pass/PassWrap';
import Ready from '@/components/home/ready/Ready';
import Expection from '@/components/home/expection/Expection';
import Feedback from '@/components/home/feedback/Feedback';
import TeacherList from '@/components/home/teacherList/TeacherList';

export default function Home() {
	return (
		<>
			<Title />
			<Ready />
			<Expection />
			<Feedback />
			<TeacherList />
			<CurriculumWrap />
			<ConsultingWrap />
			<ReviewWrap />
			<PassWrap />
		</>
	);
}
