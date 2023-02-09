import React from 'react';
import CurriculumWrap from '@/components/home/curriculum/CurriculumWrap';
import Title from '@/components/home/title/Title';
import ConsultingWrap from '@/components/home/consulting/ConsultingWrap';
import ReviewWrap from '@/components/home/review/ReviewWrap';
import PassWrap from '@/components/home/pass/PassWrap';

export default function Home() {
	return (
		<>
			<Title />
			<CurriculumWrap />
			<ConsultingWrap />
			<ReviewWrap />
			<PassWrap />
		</>
	);
}
