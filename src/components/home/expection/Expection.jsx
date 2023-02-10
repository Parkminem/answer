import React from 'react';
import style from '@/components/home/expection/Expection.module.scss';
import expection01 from '@/assets/images/image/expection01.png';
import expection02 from '@/assets/images/image/expection02.png';
import expection03 from '@/assets/images/image/expection03.png';
import expection04 from '@/assets/images/image/expection04.png';
import expection05 from '@/assets/images/image/expection05.png';

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
					<div className={style.bottom}>
						<div className={style.file_image}>
							<img src={expection01} alt="파일 이미지" />
						</div>
						<div className={style.desc01}>
							<h3>1:1 집중과정</h3>
							<div className={style.paragraph}>
								<p>서류전형 합격했다? 안심은 금물!</p>
								<p>면접완성반에서 코칭받고 최종 취업하자!</p>
								<img src={expection02} alt="dot" />
							</div>
						</div>
						<div className={style.desc02}>
							<h3>대기업 면접</h3>
							<div className={style.paragraph}>
								<p>면접의 어떤 유형이든 대응할 수 있도록</p>
								<p>실제 같은 실습과정과 피드백을 드립니다!</p>
								<img src={expection03} alt="dot" />
							</div>
						</div>
						<div className={style.desc03}>
							<h3>대입면접</h3>
							<div className={style.paragraph}>
								<p>성적이 높다면 고전략으로,</p>
								<p>중위권이나 성적이 낮다면 면접으로</p>
								<p>성적을 뒤집을 수 있는 전략!</p>
								<img src={expection04} alt="dot" />
							</div>
						</div>
						<div className={style.desc04}>
							<h3>공무원 면접 대비</h3>
							<div className={style.paragraph}>
								<p>급변하는 공무원 면접시험에 맞추어</p>
								<p>수강생이 원하는 요점만을 알려드리겠습니다.</p>
								<img src={expection05} alt="dot" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Expection;
