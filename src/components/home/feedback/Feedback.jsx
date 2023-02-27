import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import style from '@/components/home/feedback/Feedback.module.scss';
import feedback01 from '@/assets/images/image/feedback01.png';
import feedback02 from '@/assets/images/image/feedback02.png';
import feedback03 from '@/assets/images/image/feedback03.png';
import feedbackImg from '@/assets/images/mobile/mobile_feedback.png';

const Feedback = () => {
	const width = window.innerWidth;
	const [mobile, setMobile] = useState(width);
	const cx = classNames.bind(style);
	return (
		<>
			{mobile < 401 ? (
				<section className={cx('feedback')}>
					<div className={cx('feedback__inner')}>
						<div className={cx('feedback__title-box')}>
							<h1>일단, 면접 답변 피드백을 받아보세요.</h1>
							<p>*AI 모델 공인인증시험 성적서에서 정확성을 인정받은 서비스</p>
						</div>
						<div className={cx('feedback__link-box')}>
							<Link to="/mypage/feedback">
								<h2>면접 답변 피드백 시작</h2>
								<p>10분 정도 소요됩니다.</p>
							</Link>
						</div>
						<div className={cx('feedback__img-box')}>
							<img src={feedbackImg} alt="면접 답변 피드백" />
						</div>
					</div>
				</section>
			) : (
				<section className={style.feedback}>
					<div className={style.container}>
						<div className={style.left_wrap}>
							<img className={style.text_image} src={feedback02} alt="면접 답변 텍스트 이미지" />
							<Link to="/mypage/feedback">
								<img
									className={style.button_image}
									src={feedback03}
									alt="면접 답변 피드백 시작 이미지"
								/>
							</Link>
						</div>
						<img className={style.image_image} src={feedback01} alt="답변 피드백 이미지" />
					</div>
				</section>
			)}
		</>
	);
};

export default Feedback;
