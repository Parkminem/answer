import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import classNames from 'classnames/bind';
import styles from '@/components/common/MobileSideBar.module.scss';
import logo from '@/assets/images/mobile/common/mobile_side_logo.png';
import user from '@/assets/images/mobile/common/mobile_side_user.png';
import editIcon from '@/assets/images/mobile/common/mobile_side_edit_icon.png';
import go from '@/assets/images/mobile/common/mobile_side_go.png';
import down from '@/assets/images/mobile/common/mobile_side_down.png';
import noUser from '@/assets/images/mobile/common/mobile_no_user.png';
import { mobileSidebarState } from '@/store/style';

const MobileSideBar = () => {
	const cx = classNames.bind(styles);
	const [slide, setSlide] = useState(false);
	const [onOff, setOnOff] = useRecoilState(mobileSidebarState);
	const { pathname } = useLocation();
	const navigate = useNavigate();
	let token = window.localStorage.getItem('user');

	const logoutHandler = () => {
		window.localStorage.removeItem('user');
		window.localStorage.removeItem('user_mail');
		window.localStorage.removeItem('code');
		window.localStorage.removeItem('exp');
		window.location.href = '/';
	};
	useEffect(() => {
		setOnOff(false);
	}, [pathname]);

	//마이페이지 드롭다운
	const dropdownHandler = () => {
		setSlide((prev) => !prev);
	};

	//사이드바 닫기
	const offSidebarHandler = () => {
		setOnOff(false);
		setSlide(false);
	};
	return (
		<div className={cx('side-bar', onOff ? 'open' : '')}>
			<div className={cx('side-bar__back')} onClick={offSidebarHandler}></div>
			<div className={cx('side-bar__inner')}>
				<div className={cx('side-bar__logo')}>
					<Link to="/">
						<img src={logo} alt="더 앤써" />
					</Link>
				</div>
				{token ? (
					<div className={cx('side-bar__profile-box')}>
						<div className={cx('side-bar__profile-box__img-box')}>
							<img src={user} alt="유저 이미지" />
							<button>
								<img src={editIcon} alt="수정" />
							</button>
						</div>
						<div className={cx('side-bar__profile-box__text-box')}>
							<h1>
								<strong>김앤써</strong>님
							</h1>
							<button onClick={logoutHandler}>
								<span>로그아웃</span>
							</button>
						</div>
					</div>
				) : (
					<div className={cx('side-bar__profile-box')}>
						<div className={cx('side-bar__no-profile-box__img-box')}>
							<img src={noUser} alt="유저 이미지" />
							<button>
								<img src={editIcon} alt="수정" />
							</button>
						</div>
						<div className={cx('side-bar__no-profile-box__text-box')}>
							<h2>로그인을 해주세요.</h2>
							<div className={cx('btns')}>
								<button className={cx('login')} onClick={() => navigate('/login')}>
									<span>로그인</span>
								</button>
								<button onClick={() => navigate('/join')}>
									<span>회원가입</span>
								</button>
							</div>
						</div>
					</div>
				)}

				<nav className={cx('side-bar__gnb')}>
					<ul className={cx('side-bar__list')}>
						<li className={cx('side-bar__list__depth01')}>
							<Link to="/interview">
								<span>면접 진단하기</span>
								<img src={go} alt="면접 진단하기" />
							</Link>
						</li>
						<li className={cx('side-bar__list__depth01')}>
							<Link to="/">
								<span>커뮤니티</span>
								<img src={go} alt="커뮤니티" />
							</Link>
						</li>
						<li className={cx('side-bar__list__depth01')}>
							<Link to="/">
								<span>자소서 문제 추출</span>
								<img src={go} alt="자소서 문제 추출" />
							</Link>
						</li>
						<li className={cx('side-bar__list__depth01')}>
							<Link to="/">
								<span>나의 피드백</span>
								<img src={go} alt="나의 피드백" />
							</Link>
						</li>
						<li className={cx('side-bar__list__depth01')}>
							<a onClick={dropdownHandler}>
								<span>마이페이지</span>
								<img src={down} alt="마이페이지" className={cx(slide ? 'rotate' : '')} />
							</a>
							<ul className={cx('side-bar__list__depth02', slide ? 'open' : '')}>
								<li>
									<Link to="/mypage/modify">회원 정보</Link>
								</li>
								<li>
									<Link to="/mypage/diagnostic_history">면접 진단 내역</Link>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default MobileSideBar;
