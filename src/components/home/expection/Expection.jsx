import React from 'react';
import style from '@/components/home/expection/Expection.module.scss';
import expection01 from '@/assets/images/image/expection01.png';

const Expection = () => {
	return (
		<section className={style.expection}>
			<div className={style.container}>
				<div className={style.inner}>
					<div className={style.sentence}>
						<span className={style.title}>10년 동안 면접만을 가르쳤습니다.</span>
						<div className={style.sub_title}>면접 예상 질문 적중률 93.7%</div>
						<div className={style.answer}>예상 질문 서비스를 이용하세요.</div>
					</div>
					<div className={style.file_image}>
						<img src={expection01} alt="파일 이미지" />
					</div>
					<div className={style.desc01}>
						<p>1:1 집중과정</p>
					</div>
					<div className={style.desc02}>
						<p>대기업 면접</p>
					</div>
					<div className={style.desc03}>대입면접</div>
					<div className={style.desc04}>공무원 면접 대비</div>
				</div>
			</div>
		</section>
	);
};

export default Expection;
