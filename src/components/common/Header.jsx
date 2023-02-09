import React from 'react';
import style from '@/components/common/Header.module.scss';
import logo from '@/assets/images/common/logo.png';

export default function Header() {
	return (
		<>
			<div className={style.logo}>
				<span className={style.logo__image}>
					<img src={logo} alt="logo" />
				</span>
				<span className={style.logo__title}>answer</span>
			</div>
			<div className={style.menu}>
				<div className={style.menu__left}>
					<span>세움스피치학원</span>
					<span>회사소개</span>
				</div>
				<div className={style.menu__right}>
					<span>로그인</span>
					<span>회원가입</span>
					<span>고객센터</span>
				</div>
			</div>
		</>
	);
}
