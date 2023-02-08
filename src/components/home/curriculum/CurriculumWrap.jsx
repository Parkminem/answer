import React from 'react';
import MainSubTitle from '@/components/common/MainSubTitle';
import CurriculumList from '@/components/home/curriculum/CurriculumList';

const CurriculumWrap = () => {
	return (
		<section>
			<MainSubTitle
				number="02"
				title="경험으로 증명하다."
				subText="10년의 면접 노하우를 담은"
				mainText="맞춤형 커리큘럼"
			/>
			<CurriculumList />
		</section>
	);
};

export default CurriculumWrap;
