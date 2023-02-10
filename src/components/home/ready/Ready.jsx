import React from 'react';
import style from '@/components/home/ready/Ready.module.scss';
import ready_strong from '@/assets/images/image/ready_strong.png';
import ready01 from '@/assets/images/image/ready01.png';

const Ready = () => {
	return (
		<section className={style.ready}>
			<div className={style.container}>
				<div className={style.left_wrap}>
					<img src={ready_strong} alt="면접 준비 강조점" />
					<div className={style.title}>면접 준비</div>
					<div className={style.sub_title}>
						<p>어떻게 준비해야 할지</p>
						<strong>모르겠다면?</strong>
					</div>
				</div>
				<div className={style.right_wrap}>
					<img src={ready01} alt="면접 준비 이미지" />
				</div>
			</div>
		</section>
	);
};

export default Ready;
