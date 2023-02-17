import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from '@/components/InterviewSideBar.module.scss';
import dropdownImg from '@/assets/images/common/dropdown.png';

const InterviewSideBar = () => {
	const cx = classNames.bind(styles);
	const [select, setSelect] = useState(false);
	const [selectItem, setSelectItem] = useState('진단 항목을 선택해주세요.');
	const [selected, setSelected] = useState(false);

	//셀렉트바 열고닫는함수
	const selectHandler = () => {
		setSelect((prev) => !prev);
	};
	// 셀렉트바 면접 타입 결정
	const selectedHandler = (e) => {
		setSelectItem(e.target.dataset.object);
		setSelected(true);
		setSelect(false);
	};
	return (
		<div className={cx('sidebar')}>
			<div className={cx('sidebar-wrap')}>
				<h1>면접 진단하기</h1>
				<div className={cx('sidebar__select-box', select ? 'open' : '')}>
					<div className={cx('sidebar__select-box__default', selected ? 'selected' : '')}>
						<button onClick={selectHandler}>
							<span className={cx('sidebar__select-box__default__span')}>{selectItem}</span>
						</button>
						<img src={dropdownImg} alt="드롭다운" />
					</div>
					<ul>
						<li>
							<button data-object="공무원" onClick={selectedHandler}>
								<span data-object="공무원">공무원</span>
							</button>
						</li>
						<li>
							<button data-object="대학·입시" onClick={selectedHandler}>
								<span data-object="대학·입시">대학·입시</span>
							</button>
						</li>
						<li>
							<button data-object="간호사" onClick={selectedHandler}>
								<span data-object="간호사">간호사</span>
							</button>
						</li>
						<li>
							<button data-object="일반 면접" onClick={selectedHandler}>
								<span data-object="일반 면접">일반 면접</span>
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
