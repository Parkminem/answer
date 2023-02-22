import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styles from '@/components/common/MobileAuthHeader.module.scss';
import prev from '@/assets/images/mobile/common/m_prev.png';
import { changPwState } from '@/store/auth';

const MobileAuthHeader = () => {
	const cx = classNames.bind(styles);
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const changePw = useRecoilValue(changPwState);

	//타이틀 변경
	const name = () => {
		if (pathname === '/login') {
			return '로그인';
		} else if (pathname === '/join') {
			return '회원가입';
		} else if (pathname === '/findpassword' && !changePw) {
			return '비밀번호 찾기';
		} else if (pathname === '/findpassword' && changePw) {
			return '비밀번호 재설정';
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
			</div>
		</header>
	);
};

export default MobileAuthHeader;
