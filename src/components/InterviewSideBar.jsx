import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { useSetRecoilState } from 'recoil';
import styles from '@/components/InterviewSideBar.module.scss';
import dropdownImg from '@/assets/images/common/dropdown.png';
import { typeState } from '@/store/interview';

const InterviewSideBar = ({ title, types, typeDetail, fetchTypeDetail }) => {
	const cx = classNames.bind(styles);
	const [select, setSelect] = useState(false);
	const [selectItem, setSelectItem] = useState('진단 항목을 선택해주세요.');
	const [selected, setSelected] = useState(false);
	//스켈레톤 타입 atom set
	const setTypeState = useSetRecoilState(typeState);

	//셀렉트바 열고닫는함수
	const selectHandler = () => {
		setSelect((prev) => !prev);
	};
	// 셀렉트바 면접 타입 결정
	const selectedHandler = (e) => {
		setSelectItem(e.target.dataset.object);
		setSelected(true);
		setSelect(false);
		//스켈레톤 타입
		setTypeState(e.target.dataset.object);
		types.map((type) => {
			if (type.interviewType === e.target.dataset.object) {
				const typeCode = type.interviewTypeCode;
				fetchTypeDetail(typeCode);
			}
		});
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
						{types &&
							types.map((type) => (
								<li key={type.interviewTypeCode}>
									<button data-object={type.interviewType} onClick={selectedHandler}>
										<span data-object={type.interviewType}>{type.interviewType}</span>
									</button>
								</li>
							))}
					</ul>
				</div>
				<div className={cx('sidebar__info-box')}>
					<div className={cx('sidebar__info-box__count')}>
						<span className={cx('now')}>
							{typeDetail && typeDetail.responseInterviewQuestions[0].sequence.slice(1)}
						</span>
						<span>/</span>
						<span>38</span>
					</div>
					<h2>{typeDetail && typeDetail.responseInterviewQuestions[0].questionContent}</h2>
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
