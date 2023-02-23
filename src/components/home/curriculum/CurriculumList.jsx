import React, { useState } from 'react';
import styles from '@/components/home/curriculum/CurriculumList.module.scss';
import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import curriculum01 from '@/assets/images/image/curriculum01.png';
import curriculum02 from '@/assets/images/image/curriculum02.png';
import curriculum03 from '@/assets/images/image/curriculum03.png';
import curriculum04 from '@/assets/images/image/curriculum04.png';
import curriculum05 from '@/assets/images/image/curriculum05.png';
import curriculum06 from '@/assets/images/image/curriculum06.png';

const info = [
	{
		id: 1,
		bg: curriculum01,
		onoff: '오프라인',
		text01: '즉흥 스피치',
		text02: '면접 태도 및 비언어적 요소',
		period: '3개월 과정',
	},
	{
		id: 2,
		bg: curriculum02,
		onoff: '온라인',
		text01: '면접 답변 피드백 예시',
		text02: '답변 작성 및 저장',
		period: '상시',
	},
	{
		id: 3,
		bg: curriculum03,
		onoff: '오프라인',
		text01: '공무원·공기업 기출문제',
		text02: '토론면접, PT면접 구조화 방법',
		period: '3개월 과정',
	},
	{
		id: 4,
		bg: curriculum04,
		onoff: '오프라인',
		text01: '키즈 스피치',
		text02: '유소년 발표 자신감 클래스',
		period: '1개월 과정',
	},
	{
		id: 5,
		bg: curriculum05,
		onoff: '온/오프라인',
		text01: 'AI 자소서 첨삭',
		text02: '자소서 질문 추출',
		period: '3개월 과정',
	},
	{
		id: 6,
		bg: curriculum06,
		onoff: '오프라인',
		text01: '대입 준비 / 취업 준비',
		text02: '프레젠테이션 핵심 스킬 외 다수',
		period: '6개월 과정',
	},
];

const CurriculumList = () => {
	const cx = classNames.bind(styles);
	const width = window.innerWidth;
	const [mobile, setMobile] = useState(width);

	const swiperParams = {
		centeredSlides: true,
		centerInsufficientSlides: true,
		slidesPerView: 3,
	};
	return (
		<div className={cx('curriculum-list-box')}>
			{mobile < 401 ? (
				<Swiper className={cx('swiper-list')} {...swiperParams}>
					{info.map((i) => {
						return (
							<SwiperSlide key={i.id} className={cx('swiper-list__slide')}>
								<div
									className={cx('swiper-list__slide-box')}
									style={{ backgroundImage: `url(${i.bg})` }}
								>
									<div className={cx('swiper-list__slide-box__text-box')}>
										<span className={cx('onoff')}>{i.onoff}</span>
										<p>{i.text01}</p>
										<p>{i.text02}</p>
										<span className={cx('period')}>{i.period}</span>
									</div>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			) : (
				<ul className={cx('curriculum-list-box__list')}>
					{info.map((i) => {
						return (
							<li key={i.id} className={cx('curriculum-list-box__item')}>
								<div
									className={cx('curriculum-list-box__item__wrap')}
									style={{ backgroundImage: `url(${i.bg})` }}
								>
									<div className={cx('curriculum-list-box__item__text-box')}>
										<span className={cx('onoff')}>{i.onoff}</span>
										<p>{i.text01}</p>
										<p>{i.text02}</p>
										<span className={cx('period')}>{i.period}</span>
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};

export default CurriculumList;
