import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from '@/components/myPage/SideBar.module.scss';
import userImg from '@/assets/images/common/user_img.png';
import editIcon from '@/assets/images/common/edit_icon.png';

const SideBar = () => {
	const cx = classNames.bind(styles);
	return (
		<div className={cx('sidebar')}>
			<div className={cx('sidebar__top')}>
				<h1>마이페이지</h1>
				<div className={cx('sidebar__top__info-box')}>
					<div className={cx('sidebar__info-box__img-box')}>
						<img src={userImg} alt="유저 프로필" />
						<button>
							<img src={editIcon} alt="수정 아이콘" />
						</button>
					</div>
					<div className={cx('sidebar__info-box__name-box')}>
						<h2>
							<strong>김앤써</strong>님
						</h2>
						<p>나의 목표, 또는 한 줄 소개를 적어보세요.</p>
					</div>
					<div className={cx('sidebar__gnb')}>
						<ul className={cx('sidebar__gnb__list')}>
							<li className={cx('sidebar__gnb__depth01')}>
								<Link to="">
									<span>회원 정보</span>
								</Link>
								<ul className={cx('sidebar__gnb__depth02')}>
									<li>
										<Link to="">회원 정보 수정</Link>
									</li>
								</ul>
							</li>
							<li className={cx('sidebar__gnb__depth01')}>
								<Link to="">
									<span>면접 진단 내역</span>
								</Link>
								<ul className={cx('sidebar__gnb__depth02')}>
									<li>
										<Link to="">
											<span>면접 진단 내용</span>
										</Link>
									</li>
									<li>
										<Link to="">
											<span>면접 피드백</span>
										</Link>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className={cx('sidebar__bot')}>
				<h1>
					<strong>앤써</strong> 고객센터
				</h1>
				<div className={cx('sidebar__bot__tel-box')}>
					<p>9:00 ~ 18:00 (월-금)</p>
					<p>점심시간 12:00 ~ 13:00</p>
				</div>
				<h2>1234 - 1234</h2>
			</div>
		</div>
	);
};

export default SideBar;
