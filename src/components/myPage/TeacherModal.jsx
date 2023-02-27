import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.min.css';
import styles from '@/components/myPage/TeacherModal.module.scss';
import teacherImg from '@/assets/images/image/teacher_yang.png';
import graph from '@/assets/images/image/graph.png';
import closeIcon from '@/assets/images/common/close.png';
import prev from '@/assets/images/common/prev.png';
import next from '@/assets/images/common/next.png';

const cx = classNames.bind(styles);

const BackDrop = (props) => {
	return <div className={cx('backdrop')} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
	const width = window.innerWidth;
	const [mobile, setMobile] = useState(width);
	const [swiper, setSwiper] = useState(null);
	const [naviIdx, setNaviIndex] = useState(0);
	SwiperCore.use([Navigation]);

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

	const swiperStyle = {
		width: '630px',
	};
	const mobileSwiperStyle = {
		width: '300px',
	};

	return (
		<div className={cx('modal')}>
			<div className={cx('modal-wrap')}>
				<div className={cx('modal__close')}>
					<button>
						<img src={closeIcon} alt="닫기" onClick={props.onConfirm} />
					</button>
				</div>
				<Swiper
					style={mobile < 401 ? mobileSwiperStyle : swiperStyle}
					loop={true}
					speed={600}
					slidesPerView={1}
					ref={setSwiper}
					{...swiperParams}
					className={cx('modal__card')}
				>
					<SwiperSlide className={cx('modal__card-wrap')}>
						<div className={cx('modal__card__img-box')}>
							<div className={cx('modal__card__img-box__img')}>
								<img src={teacherImg} alt="양다현 강사님" />
							</div>
							<div className={cx('modal__card__img-box__text-box')}>
								<div className={cx('modal__card__img-box__text-box__text')}>
									<span>스피치 강사</span>
									<h2>양다현 강사님</h2>
									<p>성인PT, 보이스, 아나운서 스피치</p>
								</div>
								<a href="">
									<span>자세히 보기</span>
								</a>
							</div>
						</div>
						<div className={cx('modal__card__graph-box')}>
							<h1 className={cx('pc')}>면접전문가의 강점</h1>
							<div className={cx('modal__card__graph-box__img-box')}>
								<img src={graph} alt="그래프" />
							</div>
							<div className={cx('modal__card__graph-box__desc')}>
								<h1 className={cx('mobile')}>면접전문가의 강점</h1>
								<p>·면접 전문가의 강점이 있습니다.</p>
								<p>·전문가 다운 강점으로 면접을 어쩌구 입니다.</p>
								<p>·어려워잉~</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className={cx('modal__card-wrap')}>
						<div className={cx('modal__card__img-box')}>
							<div className={cx('modal__card__img-box__img')}>
								<img src={teacherImg} alt="양다현 강사님" />
							</div>
							<div className={cx('modal__card__img-box__text-box')}>
								<div className={cx('modal__card__img-box__text-box__text')}>
									<span>스피치 강사</span>
									<h2>양다현 강사님</h2>
									<p>성인PT, 보이스, 아나운서 스피치</p>
								</div>
								<a href="">
									<span>자세히 보기</span>
								</a>
							</div>
						</div>
						<div className={cx('modal__card__graph-box')}>
							<h1 className={cx('pc')}>면접전문가의 강점</h1>
							<div className={cx('modal__card__graph-box__img-box')}>
								<img src={graph} alt="그래프" />
							</div>
							<div className={cx('modal__card__graph-box__desc')}>
								<h1 className={cx('mobile')}>면접전문가의 강점</h1>
								<p>·면접 전문가의 강점이 있습니다.</p>
								<p>·전문가 다운 강점으로 면접을 어쩌구 입니다.</p>
								<p>·어려워잉~</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className={cx('modal__card-wrap')}>
						<div className={cx('modal__card__img-box')}>
							<div className={cx('modal__card__img-box__img')}>
								<img src={teacherImg} alt="양다현 강사님" />
							</div>
							<div className={cx('modal__card__img-box__text-box')}>
								<div className={cx('modal__card__img-box__text-box__text')}>
									<span>스피치 강사</span>
									<h2>양다현 강사님</h2>
									<p>성인PT, 보이스, 아나운서 스피치</p>
								</div>
								<a href="">
									<span>자세히 보기</span>
								</a>
							</div>
						</div>
						<div className={cx('modal__card__graph-box')}>
							<h1 className={cx('pc')}>면접전문가의 강점</h1>
							<div className={cx('modal__card__graph-box__img-box')}>
								<img src={graph} alt="그래프" />
							</div>
							<div className={cx('modal__card__graph-box__desc')}>
								<h1 className={cx('mobile')}>면접전문가의 강점</h1>
								<p>·면접 전문가의 강점이 있습니다.</p>
								<p>·전문가 다운 강점으로 면접을 어쩌구 입니다.</p>
								<p>·어려워잉~</p>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
				<div className={cx('modal__btns')}>
					<button className={cx('modal__btns__prev', 'btn')} ref={preRef}>
						<img src={prev} alt="이전버튼" />
					</button>
					<button className={cx('modal__btns__next', 'btn')} ref={nextRef}>
						<img src={next} alt="다음버튼" />
					</button>
				</div>
			</div>
		</div>
	);
};

const TeacherModal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(<BackDrop onConfirm={props.onConfirm} />, document.getElementById('backdrop'))}
			{ReactDOM.createPortal(<ModalOverlay onConfirm={props.onConfirm} />, document.getElementById('modal'))}
		</>
	);
};

export default TeacherModal;
