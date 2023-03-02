import React, { useState } from 'react';
import style from '@/components/home/ready/Ready.module.scss';
import ready_strong from '@/assets/images/image/ready_strong.png';
import ready01 from '@/assets/images/image/ready01.png';
import mobileBg from '@/assets/images/mobile/ready_section.png';
import pcBg from '@/assets/images/image/main_ready.png';

const Ready = () => {
	const width = window.innerWidth;
	const [mobile, setMobile] = useState(width);
	return (
		<>
			{mobile < 401 ? (
				<section style={{ width: 100 + '%' }}>
					<img src={mobileBg} alt="면접 준비 이미지" style={{ objectFit: 'contain' }} />
				</section>
			) : (
				<section style={{ width: 100 + '%' }} className={style.ready}>
					<img src={pcBg} alt="면접 준비 이미지" style={{ objectFit: 'contain', maxWidth: 100 + '%' }} />
				</section>
			)}
		</>
	);
};

export default Ready;
