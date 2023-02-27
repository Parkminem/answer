import React, { useState } from 'react';
import styles from '@/components/common/MainSubTitle.module.scss';
import classNames from 'classnames/bind';
import polygon from '@/assets/images/common/polygon01.png';
import mPolygon from '@/assets/images/mobile/common/mobile_frame.png';

const MainSubTitle = (props) => {
	const cx = classNames.bind(styles);
	const width = window.innerWidth;
	const [mobile, setMobile] = useState(width);
	return (
		<div className={cx('main-title')}>
			<div
				className={cx('main-title__polygon')}
				style={{ backgroundImage: `url(${mobile < 401 ? mPolygon : polygon})` }}
			>
				<span>{props.number}</span>
			</div>
			<div className={cx('main-title__text-box')}>
				<h1 className={cx('main-title__text-box__title')}>{props.title}</h1>
				<p className={cx('main-title__text-box__desc')}>{props.subText}</p>
				<h2 className={cx('main-title__text-box__sub-title')}>{props.mainText}</h2>
			</div>
		</div>
	);
};

export default MainSubTitle;
