import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from '@/components/common/NavBar.module.scss';
import img01 from '@/assets/images/image/menu.png';

export default function NavBar(props) {
	const navigate = useNavigate();

	const naviHandler = (path) => {
		if (props.token) navigate(path);
		else {
			alert('로그인 후 이용가능합니다.');
			navigate('/login');
		}
	};

	return (
		<nav className={style.nav_bar}>
			<div className={style.container}>
				<ul className={style.menu}>
					<li>
						<a onClick={() => naviHandler('/interview')}>면접 진단하기</a>
					</li>
					<li>
						<a href="">커뮤니티</a>
					</li>
					<li>
						<a href="">자소서 문제 추출</a>
					</li>
					<li>
						<a href="">나의 피드백</a>
					</li>
					<li>
						<a onClick={() => naviHandler('/mypage/modify')}>마이페이지</a>
					</li>
					<li className={style.all}>
						<img src={img01} alt="" />
						전체메뉴
					</li>
				</ul>
			</div>
		</nav>
	);
}
