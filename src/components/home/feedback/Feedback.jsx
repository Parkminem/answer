import React from 'react';
import style from '@/components/home/feedback/Feedback.module.scss';
import feedback01 from '@/assets/images/image/feedback01.png';
import feedback02 from '@/assets/images/image/feedback02.png';
import feedback03 from '@/assets/images/image/feedback03.png';

const Feedback = () => {
	return (
		<section className={style.feedback}>
			<div className={style.container}>
				<div className={style.left_wrap}>
					<img className={style.text_image} src={feedback02} alt="면접 답변 텍스트 이미지" />
					<button>
						<img className={style.button_image} src={feedback03} alt="면접 답변 피드백 시작 이미지" />
					</button>
				</div>
				<img className={style.image_image} src={feedback01} alt="답변 피드백 이미지" />
			</div>
		</section>
	);
};

export default Feedback;
