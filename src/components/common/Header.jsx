import React from 'react';
import style from '@/components/common/Header.module.scss';
import logo from '@/assets/images/common/logo.png';

export default function Header() {
	return (
		<div className={style.main_logo}>
			<span className={style.logo}>
				<img src={logo} alt="logo" />
			</span>
			<span className={style.title}>answer</span>
		</div>
	);
}
