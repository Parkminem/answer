import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import styles from '@/components/InterviewSideBar.module.scss';
import dropdownImg from '@/assets/images/common/dropdown.png';
import { typeState } from '@/store/interview';
import { typeListAtom, answerListAtom } from '@/store/diagnosis';

const InterviewSideBar = ({ ready, callQuestion, title, index }) => {
	const cx = classNames.bind(styles);
	const width = window.innerWidth;
	const [mobile, setMobile] = useState(width);
	const [select, setSelect] = useState(false);
	const [selectItem, setSelectItem] = useState('진단 항목을 선택해주세요.');
	const [selected, setSelected] = useState(false);
	//스켈레톤 타입 atom set
	const setTypeState = useSetRecoilState(typeState);

	//쏘히
	const typeList = useRecoilValue(typeListAtom);
	const anwserList = useRecoilValue(answerListAtom);

	//셀렉트바 열고닫는함수
	const selectHandler = () => {
		setSelect((prev) => !prev);
	};

	// 셀렉트바 면접 타입 결정
	const selectedHandler = (e) => {
		setSelectItem(e.target.dataset.object);
		setSelected(true);
		setSelect(false);

		//선택한 면접 타입의 코드를 찾아서 그 코드로 면접타입 디테일을 불러옴
		//스켈레톤 타입
		setTypeState(e.target.dataset.object);
		callQuestion(e.target.dataset.code);
	};

	//카운트
	const returnCount = () => {
		if (index < 6) {
			return index;
		} else {
			switch (index) {
				case 6:
					return '6 - 10';
				case 7:
					return '11 - 15';
				case 8:
					return '16 - 20';
				case 9:
					return '21 - 25';
				case 10:
					return '26 - 28';
			}
		}
	};
	return (
		<div className={cx('sidebar')}>
			<div className={cx('sidebar-wrap')}>
				{mobile < 481 ? (
					<>
						<div className={cx('sidebar__mobile-title')}>
							<h1>면접 진단 테스트</h1>
							<p>나의 면접 예상 점수는 몇 점일까?</p>
						</div>
					</>
				) : (
					<h1>면접 진단하기</h1>
				)}
				<div className={cx('sidebar__select-box', select ? 'open' : '')}>
					<div className={cx('sidebar__select-box__default', selected ? 'selected' : '')}>
						<button onClick={selectHandler}>
							<span className={cx('sidebar__select-box__default__span')}>{selectItem}</span>
						</button>
						<img src={dropdownImg} alt="드롭다운" />
					</div>
					<ul>
						{typeList &&
							typeList.map((type) => (
								<li key={type.interviewTypeCode}>
									<button
										data-object={type.interviewType}
										data-code={type.interviewTypeCode}
										onClick={selectedHandler}
									>
										<span data-object={type.interviewType} data-code={type.interviewTypeCode}>
											{type.interviewType}
										</span>
									</button>
								</li>
							))}
					</ul>
				</div>
				{mobile < 481 && (
					<div className={cx('sidebar__mobile-desc-box')}>
						<p>총 검사 시간은 00분 내외입니다.</p>
						<p>가능하면 답변 시 ‘중립’을 선택하지 마십시오.</p>
					</div>
				)}
				<div className={cx('sidebar__info-box')}>
					<div className={cx('sidebar__info-box__count', ready ? 'active' : '')}>
						<span className={cx('now')}>{returnCount()}</span>
						<span>/</span>
						<span>
							{anwserList &&
								anwserList.requestInterviewReplyDetails.length +
									anwserList.requestPropensityReplyDetails.length}
						</span>
					</div>
					{index > 5 ? <h2>주어진 문항에 대한 답변을 선택해 주십시오.</h2> : <h2>{title}</h2>}
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
