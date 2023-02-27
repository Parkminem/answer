import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { useSetRecoilState } from 'recoil';
import styles from '@/components/InterviewSideBar.module.scss';
import dropdownImg from '@/assets/images/common/dropdown.png';
import { typeState } from '@/store/interview';

const InterviewSideBar = ({ types, typeDetail, fetchTypeDetail, questionIndex, ready }) => {
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

		//선택한 면접 타입의 코드를 찾아서 그 코드로 면접타입 디테일을 불러옴
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
				{questionIndex < 5 && (
					<div className={cx('sidebar__info-box')}>
						<div className={cx('sidebar__info-box__count', ready ? 'active' : '')}>
							<span className={cx('now')}>
								{typeDetail && typeDetail.responseInterviewQuestions[questionIndex].sequence.slice(1)}
							</span>
							<span>/</span>
							<span>
								{typeDetail
									? typeDetail.responseInterviewQuestions.length +
									  typeDetail.responsePropensityQuestions.length
									: '28'}
							</span>
						</div>
						<h2>{typeDetail && typeDetail.responseInterviewQuestions[questionIndex].questionContent}</h2>
						<div className={cx('sidebar__info-box__test-box')}>
							<h3>면접 진단 테스트</h3>
							<p>나의 면접 예상점수는 몇 점일까?</p>
						</div>
					</div>
				)}
				{questionIndex >= 5 && (
					<div className={cx('sidebar__info-box')}>
						<div className={cx('sidebar__info-box__count')}>
							{questionIndex === 5 && <span className={cx('now')}>6-10</span>}
							{questionIndex === 6 && <span className={cx('now')}>11-15</span>}
							{questionIndex === 7 && <span className={cx('now')}>16-20</span>}
							{questionIndex === 8 && <span className={cx('now')}>21-25</span>}
							{questionIndex === 9 && <span className={cx('now')}>25-28</span>}
							<span>/</span>
							<span>28</span>
						</div>
						{/* <h2>{typeDetail && typeDetail.responseInterviewQuestions[questionIndex].questionContent}</h2> */}
						<h2>주어진 문항에 대한 답변을 선택해 주십시오.</h2>
						<div className={cx('sidebar__info-box__test-box')}>
							<h3>면접 진단 테스트</h3>
							<p>나의 면접 예상점수는 몇 점일까?</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default InterviewSideBar;
