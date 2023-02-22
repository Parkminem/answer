import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '@/components/common/MobilePageHeader.module.scss';
import prev from '@/assets/images/mobile/common/m_prev.png';
import hamburger from '@/assets/images/mobile/common/mobile_hamburger.png';

const MobilePageHeader = () => {
	const cx = classNames.bind(styles);
	const { pathname } = useLocation();
	const navigate = useNavigate();

	//타이틀 변경
	const name = () => {
		if (
			pathname === '/mypage' ||
			pathname === '/mypage/feedback' ||
			pathname === '/mypage/diagnostic_history' ||
			pathname === '/mypage/diagnostic_detail' ||
			pathname === '/mypage/modify'
		) {
			return '마이페이지';
		} else if (pathname === '/interview') {
			return '면접 진단하기';
		}
	};

	const [title, setTitle] = useState(name);

	//랜더링 마다 타이틀 감지하여 변경
	useEffect(() => {
		setTitle(name);
	});

	//이전 버튼 클릭
	const prevHandler = () => {
		navigate(-1);
	};
	return (
		<header>
			<div className={cx('empty')}></div>
			<div className={cx('nav')}>
				<div className={cx('prev-box')}>
					<button onClick={prevHandler}>
						<img src={prev} alt="이전" />
					</button>
				</div>
				<h1>{title}</h1>
				<div className={cx('hamburger-box')}>
					<button>
						<img src={hamburger} alt="전체메뉴" />
					</button>
				</div>
			</div>
		</header>
	);
};

export default MobilePageHeader;
