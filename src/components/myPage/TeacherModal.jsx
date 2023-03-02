import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import ApexCharts from 'apexcharts';
import ReactApexChart from 'react-apexcharts';
import {
	Chart as ChartJS,
	LineElement,
	PointElement,
	Tooltip,
	Legend,
	RadialLinearScale,
	Filler,
	LinearScale,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import 'swiper/swiper.min.css';
import styles from '@/components/myPage/TeacherModal.module.scss';
import teacherImg from '@/assets/images/image/teacher_yang.png';
import graph from '@/assets/images/image/graph.png';
import closeIcon from '@/assets/images/common/close.png';
import prev from '@/assets/images/common/prev.png';
import next from '@/assets/images/common/next.png';

const cx = classNames.bind(styles);

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, LinearScale);

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

	const dataArr = props.data.map((i) => {
		return {
			labels: ['논리력', '창의력', '심리', '스피치역량', '기업분석', '전문분야'],
			datasets: [
				{
					data: i.responseInterviewExpertCapabilities.map((s) => {
						return s.score;
					}),
					backgroundColor: 'rgb(253, 194, 126, 0.2)',
					borderColor: '#fdc27e',
					borderWidth: 1,
				},
			],
		};
	});

	const options = {
		maintainAspectRatio: false,
		legend: {
			position: 'top',
		},
		elements: {
			point: {
				radius: 0,
			},
		},
		plugins: {
			legend: {
				display: false,
			},
		},
		tooltips: {
			enabled: false,
			intersect: false,
		},
		scales: {
			r: {
				max: 6,
				min: 0,
				grid: {
					circular: false,
				},
				pointLabels: {
					font: {
						size: 10,
					},
				},
				ticks: {
					display: false,
					stepSize: 1,
				},
			},
		},
	};
	console.log(dataArr);
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
					{props.data &&
						props.data.map((item, idx) => {
							return (
								<SwiperSlide className={cx('modal__card-wrap')} key={item.name}>
									<div className={cx('modal__card__img-box')}>
										<div className={cx('modal__card__img-box__img')}>
											<img
												src={
													'data:image/' +
													item.profileImageType +
													';base64,' +
													item.profileImage
												}
												alt={item.name}
											/>
										</div>
										<div className={cx('modal__card__img-box__text-box')}>
											<div className={cx('modal__card__img-box__text-box__text')}>
												<span>스피치 강사</span>
												<h2>{item.name} 강사님</h2>
												<p>
													{item.responseInterviewExpertDomains.map((i) => {
														return i.domainName + ',';
													})}
												</p>
											</div>
											<a href="">
												<span>자세히 보기</span>
											</a>
										</div>
									</div>
									<div className={cx('modal__card__graph-box')}>
										<h1 className={cx('pc')}>면접전문가의 강점</h1>
										<div className={cx('modal__card__graph-box__img-box')}>
											<div className="" style={{ width: 208 + 'px', height: 137 + 'px' }}>
												<Radar width={208} height={137} options={options} data={dataArr[idx]} />
											</div>
										</div>
										<div className={cx('modal__card__graph-box__desc')}>
											<h1 className={cx('mobile')}>면접전문가의 강점</h1>
											<p>{item.instructorDescription}</p>
										</div>
									</div>
								</SwiperSlide>
							);
						})}
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
			{ReactDOM.createPortal(
				<ModalOverlay data={props.data} onConfirm={props.onConfirm} />,
				document.getElementById('modal'),
			)}
		</>
	);
};

export default TeacherModal;
