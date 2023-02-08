import React from 'react';
import CurriculumWrap from '@/components/home/curriculum/CurriculumWrap';
import ConsultingWrap from '@/components/home/consulting/ConsultingWrap';
import ReviewWrap from '@/components/home/review/ReviewWrap';

export default function Home() {
	return (
		<>
			<CurriculumWrap />
			<ConsultingWrap />
			<ReviewWrap />
		</>
	);
}
