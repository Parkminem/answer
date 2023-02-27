import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styles from '@/components/common/MobileHeader.module.scss';
import logo from '@/assets/images/mobile/common/mobile_logo.png';
import hamburger from '@/assets/images/mobile/common/mobile_hamburger.png';
import { mobileSidebarState } from '@/store/style';

const MobileHeader = () => {
	const cx = classNames.bind(styles);
	const setSideBar = useSetRecoilState(mobileSidebarState);

	const sidebarOpenHandler = () => {
		setSideBar(true);
	};
	return (
		<header className={cx('header')}>
			<div className={cx('header-top')}>
				<h1>
					<Link to="/">
						<img src={logo} alt="더 앤써" />
					</Link>
				</h1>
				<button onClick={sidebarOpenHandler}>
					<img src={hamburger} alt="전체메뉴" />
				</button>
			</div>
			<nav className={cx('gnb')}>
				<ul>
					<li>
						<Link to="/interview">면접 진단하기</Link>
					</li>
					<li>
						<Link to="/">커뮤니티</Link>
					</li>
					<li>
						<Link to="/">자소서 문제 추출</Link>
					</li>
					<li>
						<Link to="/">나의 피드백</Link>
					</li>
					<li>
						<Link to="/mypage/modify">마이페이지</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MobileHeader;
