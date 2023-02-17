import React from 'react';
import { Link } from 'react-router-dom';
import style from '@/components/common/Header.module.scss';
import logo from '@/assets/images/common/main_logo.png';
import NavBar from './NavBar';

export default function Header(props) {
	const logoutHandler = () => {
		window.localStorage.removeItem('user');
		window.location.href = '/';
	};
	return (
		<header className={style.header}>
			<div className={style.container}>
				<div className={style.logo}>
					<Link to="/">
						<img src={logo} alt="logo" />
					</Link>
				</div>
				<div className={style.menu}>
					<ul className={style.menu__left}>
						<li>
							<a href="">세움스피치학원</a>
						</li>
						<li>
							<a href="">회사소개</a>
						</li>
					</ul>
					<ul className={style.menu__right}>
						{props.loginState ? (
							<>
								<li>
									<a style={{ cursor: 'pointer' }} onClick={logoutHandler}>
										로그아웃
									</a>
								</li>
							</>
						) : (
							<>
								<li>
									<Link to="/login">로그인</Link>
								</li>
								<li>
									<Link to="/join">회원가입</Link>
								</li>
							</>
						)}

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
