import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import style from '@/components/home/title/Title.module.scss';
import title01 from '@/assets/images/image/title01.png';
import title02 from '@/assets/images/image/title02.png';
import title03 from '@/assets/images/image/title03.png';
import title05 from '@/assets/images/image/title05.png';
import mobileBg from '@/assets/images/mobile/mobile_title_bg.png';
import mobileBanner01 from '@/assets/images/mobile/mobile_title_sub_frame.png';
import mobileBanner02 from '@/assets/images/mobile/mobile_title_sub_frame02.png';
import mobileTitle from '@/assets/images/mobile/mobile_title.png';

const Title = () => {
	const cx = classNames.bind(style);
	const width = window.innerWidth;
	const [mobile, setMobile] = useState(width);
	return (
		<>
			{mobile < 480 ? (
				<section className={cx('main')} style={{ backgroundImage: `url(${mobileBg})` }}>
					<div className={cx('main__inner')}>
						<div className={cx('main__banner-box')}>
							<div
								className={cx('main__banner-box__banner')}
								style={{ backgroundImage: `url(${mobileBanner01})` }}
							>
								<p>
									<span>10만 개</span> 의 합격자 면접 답변을 학습시킨
								</p>
							</div>
						</div>
						<div className={cx('main__title-box')}>
							<img src={mobileTitle} alt="국내 최초 AI 선생님" />
						</div>
						<div className={cx('main__sub-title-box')}>
							<div
								className={cx('main__sub-title-box__sub-title')}
								style={{ backgroundImage: `url(${mobileBanner02})` }}
							>
								<p>10초 만에 답변 피드백을 해주는 AI 서비스</p>
							</div>
						</div>
						<div className={cx('main__link-box')}>
							<Link to="/mypage/feedback">
								<span>면접 피드백 시작하기 &nbsp;&nbsp;&nbsp;&gt;</span>
							</Link>
						</div>
					</div>
				</section>
			) : (
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
			)}
		</>
	);
};

export default Title;
