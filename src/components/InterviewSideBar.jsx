import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from '@/components/InterviewSideBar.module.scss';
import dropdownImg from '@/assets/images/common/dropdown.png';

const InterviewSideBar = () => {
	const cx = classNames.bind(styles);
	const [select, setSelect] = useState(false);
	const selectHandler = () => {
		setSelect((prev) => !prev);
	};
	return (
		<div className={cx('sidebar')}>
			<div className={cx('sidebar-wrap')}>
				<h1>면접 진단하기</h1>
				<div className={cx('sidebar__select-box', select ? 'open' : '')}>
					<div className={cx('sidebar__select-box__default')}>
						<button onClick={selectHandler}>
							<span className={cx('sidebar__select-box__default__span')}>진단 항목을 선택해주세요.</span>
						</button>
						<img src={dropdownImg} alt="드롭다운" />
					</div>
					<ul>
						<li>
							<button>
								<span>공무원</span>
							</button>
						</li>
						<li>
							<button>
								<span>대학·입시</span>
							</button>
						</li>
						<li>
							<button>
								<span>간호사</span>
							</button>
						</li>
						<li>
							<button>
								<span>일반 면접</span>
							</button>
						</li>
					</ul>
				</div>
				<div className={cx('sidebar__info-box')}>
					<div className={cx('sidebar__info-box__count')}>
						<span className={cx('now')}>5</span>
						<span>/</span>
						<span>38</span>
					</div>
					<h2>마지막으로, 입사 후 포부를 알려주세요.</h2>
					<div className={cx('sidebar__info-box__test-box')}>
						<h3>면접 진단 테스트</h3>
						<p>나의 면접 예상점수는 몇 점일까?</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InterviewSideBar;
