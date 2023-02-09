import React from 'react';
import styles from '@/components/home/review/ReviewWrap.module.scss';
import classNames from 'classnames/bind';
import review01 from '@/assets/images/image/review01.png';
import review02 from '@/assets/images/image/review02.png';
import review03 from '@/assets/images/image/review03.png';
import youtube from '@/assets/images/image/review_youtube.png';

const ReviewWrap = () => {
	const cx = classNames.bind(styles);
	return (
		<section className={cx('review-wrap')}>
			<div className={cx('review__title-box')}>
				<h1>
					앤써에서 배출한 <strong>‘합격생’</strong> 리얼 후기
				</h1>
			</div>
			<div className={cx('review__review-box')}>
				<ul className={cx('review__list')}>
					<li>
						<div className={cx('review__list__box')} style={{ backgroundImage: `url(${review01})` }}>
							<div className={cx('review__list__box__texts')}>
								<h2>기업 면접</h2>
								<p>프레젠테이션 준비는</p>
								<p>원포인트 레슨으로</p>
							</div>
						</div>
					</li>
					<li>
						<div className={cx('review__list__box')} style={{ backgroundImage: `url(${review02})` }}>
							<div className={cx('review__list__box__texts')}>
								<h2>대학원 면접</h2>
								<p>당당하고 자연스러운 태도,</p>
								<p>합격까지 한번에!</p>
							</div>
						</div>
					</li>
					<li>
						<div className={cx('review__list__box')} style={{ backgroundImage: `url(${review03})` }}>
							<div className={cx('review__list__box__texts')}>
								<h2>공무원 면접</h2>
								<p>9급 일반행정</p>
								<p>여러분도 도전하세요</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div className={cx('review__youtube-box')}>
				<img src={youtube} alt="유튜브 보기" />
			</div>
		</section>
	);
};

export default ReviewWrap;
