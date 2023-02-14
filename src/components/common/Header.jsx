import React from 'react';
import style from '@/components/common/Header.module.scss';
import logo from '@/assets/images/common/main_logo.png';
import NavBar from './NavBar';

export default function Header() {
	return (
		<header className={style.header}>
			<div className={style.container}>
				<div className={style.logo}>
					<img src={logo} alt="logo" />
				</div>
				<div className={style.menu}>
					<ul className={style.menu__left}>
						<li>
							<a href="">세움스피치학원</a>
						</li>
						<a href="">
							<li>회사소개</li>
						</a>
					</ul>
					<ul className={style.menu__right}>
						<li>
							<a href="">로그인</a>
						</li>
						<li>
							<a href="">회원가입</a>
						</li>
						<li>
							<a href="">고객센터</a>
						</li>
					</ul>
				</div>
			</div>
			<NavBar />
		</header>
	);
}
