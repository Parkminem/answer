import React from 'react';
import style from '@/components/home/title/Title.module.scss';
import title01 from '@/assets/images/image/title01.png';
import title02 from '@/assets/images/image/title02.png';
import title03 from '@/assets/images/image/title03.png';
import title05 from '@/assets/images/image/title05.png';

const Title = () => {
	return (
		<section className={style['title-wrap']} style={{ backgroundImage: `url(${title01})` }}>
			<div className={style['title__banner']} style={{ backgroundImage: `url(${title02})` }}>
				<p>
					온라인 면접코칭 <strong>1위</strong> 플랫폼, <strong>앤써</strong>
				</p>
			</div>
			<div className={style['title__main']}>
				<img src={title03} alt="메인 이미지" />
			</div>
			<div className={style['title__btn-box']}>
				<button>
					<span>면접 피드백 시작하기 &gt;</span>
				</button>
				<img src={title05} alt="마우스 커서" />
			</div>
		</section>
	);
};

export default Title;
