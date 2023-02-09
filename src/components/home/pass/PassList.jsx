import React, { useRef, useState } from 'react';
import styles from '@/components/home/pass/PassList.module.scss';
import 'swiper/swiper.min.css';
import badge from '@/assets/images/image/pass_badge.png';
import left from '@/assets/images/common/arrow_left.png';
import right from '@/assets/images/common/arrow_right.png';
import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

const dummyData = [
	{
		id: '1',
		title: '“아주대학원 최종합격 했습니다!!"',
		text: '두서없이 글을 쓰고 말하는 습관을 전략적으로 명확하게 잡아주신 원장님께 다시 한번 감사드립니다. 자연스러운 저의 모습으로 당당하게 성공할 수 있도록 용기를 주시고 합격의 길로 도와주셔서 감사합니다.',
		from: '[ 스피치 ] 수업 수강생의 수강후기 중',
		img: badge,
	},
	{
		id: '2',
		title: '“성균관대학원 최종합격 했습니다!!"“성균관대학원 최종합격 했습니다!!"“성균관대학원 최종합격 했습니다!!"',
		text: '두서없이 글을 쓰고 말하는 습관을 전략적으로 명확하게 잡아주신 원장님께 다시 한번 감사드립니다. 자연스러운 저의 모습으로 당당하게 성공할 수 있도록 용기를 주시고 합격의 길로 도와주셔서 감사합니다.자연스러운 저의 모습으로 당당하게 성공할 수 있도록 용기를 주시고 합격의 길로 도와주셔서 감사합니다.',
		from: '[ 공무원 ] 수업 수강생의 수강후기 중',
		img: badge,
	},
	{
		id: '3',
		title: '“서울대학원 최종합격 했습니다!!"',
		text: '두서없이 글을 쓰고 말하는 습관을 전략적으로 명확하게 잡아주신 원장님께 다시 한번 감사드립니다. 두서없이 글을 쓰고 말하는 습관을 전략적으로 명확하게 잡아주신 원장님께 다시 한번 감사드립니다.자연스러운 저의 모습으로 당당하게 성공할 수 있도록 용기를 주시고 합격의 길로 도와주셔서 감사합니다.',
		from: '[ 면접 ] 수업 수강생의 수강후기 중',
		img: badge,
	},
	{
		id: '4',
		title: '“가천대학원 최종합격 했습니다!!"',
		text: '두서없이 글을 쓰고 말하는 습관을 전략적으로 명확하게 잡아주신 원장님께 다시 한번 감사드립니다. ',
		from: '[ 스피치 ] 수업 수강생의 수강후기 중',
		img: badge,
	},
];

const PassList = () => {
	const cx = classNames.bind(styles);

	//스와이퍼 스타일
	const swiperStyle = {
		boxShadow: '0px 4px 32px rgba(0, 0, 0, 0.2)',
		borderRadius: '20px',
		width: '1094px',
	};
	const swiperSlideStyle = {
		padding: '82px 115px 61px 56px',
		flexShrink: '1',
		display: 'flex',
		alignItems: 'center',
	};

	const [swiper, setSwiper] = useState(null);
	const [naviIdx, setNaviIndex] = useState(0);

	SwiperCore.use([Navigation]);

	//네비게이션 버튼
	const preRef = useRef(null);
	const nextRef = useRef(null);

	const swiperParams = {
		navigation: { prevEl: preRef.current, nextEl: nextRef.current },
		onBeforeInit: (swiper) => {
			swiper.params.navigation.prevEl = preRef.current;
			swiper.params.navigation.nextEl = nextRef.current;
			swiper.activeIndex = naviIdx;
			swiper.navigation.update();
		},
		onSwiper: setSwiper,
		onSlideChange: (e) => setNaviIndex(e.activeIndex),
	};
	return (
		<div className={cx('pass-list-wrap')}>
			<Swiper
				className={cx('pass-list')}
				style={swiperStyle}
				loop={true}
				speed={600}
				slidesPerView={1}
				ref={setSwiper}
				{...swiperParams}
			>
				{dummyData.map((data) => {
					return (
						<SwiperSlide key={data.id} className={cx('pass-list__item')} style={swiperSlideStyle}>
							<div className={cx('pass-list__img-box')}>
								<img src={data.img} alt="수강생 사진" />
							</div>
							<div className={cx('pass-list__text-box')}>
								<div className={cx('pass-list__text-box__text')}>
									<h1>{data.title}</h1>
									<p>{data.text}</p>
									<span>{data.from}</span>
								</div>
								<div className={cx('pass-list__btn-box')}>
									<button>
										<span>후기 더보기 &gt; </span>
									</button>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
			<div className={cx('pass-list__navigation', 'pre')}>
				<button ref={preRef}>
					<img src={left} alt="왼쪽 버튼" />
				</button>
			</div>
			<div className={cx('pass-list__navigation', 'next')}>
				<button ref={nextRef}>
					<img src={right} alt="오른쪽 버튼" />
				</button>
			</div>
		</div>
	);
};

export default PassList;
