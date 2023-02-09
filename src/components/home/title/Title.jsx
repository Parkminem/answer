import React from 'react';
import style from '@/components/home/title/Title.module.scss';
import title03 from '@/assets/images/image/title03.png';

const Title = () => {
	return (
		<section className={style.title}>
			<div className={style.title__sub}>
				<div className={style.title__sub_img}></div>
				<div className={style.title__sub_title}>온라인 면접코칭 1위 플랫폼, 앤써</div>
			</div>
			<div className={style.title__banner}>
				<img src={title03} alt="title_banner" />
			</div>
		</section>
	);
};

export default Title;
