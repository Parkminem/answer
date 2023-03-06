import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styles from '@/components/Tendency.module.scss';
import { tendencyState } from '@/store/interview';
import { answerListAtom } from '@/store/diagnosis';

const Tendency = ({ item, index, step }) => {
	const cx = classNames.bind(styles);
	const width = window.innerWidth;
	const [mobile, setMobile] = useState(width);

	//쏘히
	const setAnswerList = useSetRecoilState(answerListAtom);

	//클릭css 상태관리
	const [active, setActive] = useState(false);
	const [val, setVal] = useState('');
	const [clicked, setClicked] = useRecoilState(tendencyState);
	const [lastQna, setLastQna] = useState(false);

	//클릭한 버튼 활성화
	const clickHandler = (e) => {
		const index = e.target.dataset.index;
		const formatIdx = index.replace('Q', '');
		const value = e.target.dataset.val;
		const object = { index: formatIdx, value: value };
		setVal(value);
		if (!active) {
			setActive(true);
		}
		setClicked((prev) => {
			let newList = prev;
			let result;
			if (val) {
				result = newList.map((i) => {
					if (i.index === object.index) return { ...i, value: value };
					else return i;
				});
			} else {
				result = [...prev, object];
			}
			const sortResult = result.sort((a, b) => {
				return a.index - b.index;
			});
			return sortResult;
		});
		setAnswerList((prev) => {
			let copyArr = JSON.parse(JSON.stringify(prev));
			copyArr.requestPropensityReplyDetails[index - 6].replyContent = e.target.dataset.val;
			return copyArr;
		});
	};

	//첫 객관식 활성화, 이전 값 불러오기
	useEffect(() => {
		//각 페이지의 첫 질문 활성화
		if (index === 6 || index === 11 || index === 16 || index === 21 || index === 26) {
			setActive(true);
		}
		//이전 질문
		if (clicked.length > 0) {
			const currentObj = clicked.filter((i) => {
				if (i.index == index) return i;
			});
			if (currentObj.length === 1) {
				const currentVal = currentObj[0].value;
				setVal(currentVal);
				setActive(true);
			}
		}
		//각 페이지의 마지막 질문
		if (index === 10 || index === 15 || index === 20 || index === 25 || index === 28) {
			setLastQna(true);
		}
	}, []);

	//다음 객관식 활성화
	useEffect(() => {
		if (clicked.length > 0) {
			const last = clicked[clicked.length - 1];
			const next = Number(last.index) + 1;
			if (index == next) {
				setActive(true);
			}
		}
	}, [clicked]);

	return (
		<div className={cx('tendency', lastQna && 'border')}>
			<div className={cx('tendency-question')}>
				<span className={cx('tendency-question__num')}>Q{index}.</span>
				<p>{item && item.propensitySurveyQuestionContent}</p>
			</div>
			<div className={cx('tendency-select-box', active ? '' : 'no-active')}>
				{mobile < 481 ? (
					<span className={cx('agree')}>
						매우
						<br />
						그렇다
					</span>
				) : (
					<span className={cx('agree')}>매우 그렇다</span>
				)}
				<ul>
					<li className={cx(val === 'A' ? 'checked' : '')}>
						<span className={cx('hidden')}></span>
						<div className={cx('border')}>
							<button data-val="A" data-index={index} onClick={clickHandler}>
								<span data-val="A" data-index={index}></span>
							</button>
						</div>
						<span></span>
					</li>
					<li className={cx(val === 'B' ? 'checked' : '')}>
						<span></span>
						<div className={cx('border')}>
							<button data-val="B" data-index={index} onClick={clickHandler}>
								<span data-val="B" data-index={index}></span>
							</button>
						</div>
						<span></span>
					</li>
					<li className={cx(val === 'C' ? 'checked' : '')}>
						<span></span>
						<div className={cx('border')}>
							<button data-val="C" data-index={index} onClick={clickHandler}>
								<span data-val="C" data-index={index}></span>
							</button>
						</div>
						<span></span>
					</li>
					<li className={cx(val === 'D' ? 'checked' : '')}>
						<span></span>
						<div className={cx('border')}>
							<button data-val="D" data-index={index} onClick={clickHandler}>
								<span data-val="D" data-index={index}></span>
							</button>
						</div>
						<span></span>
					</li>
					<li className={cx(val === 'E' ? 'checked' : '')}>
						<span></span>
						<div className={cx('border')}>
							<button data-val="E" data-index={index} onClick={clickHandler}>
								<span data-val="E" data-index={index}></span>
							</button>
						</div>
						<span className={cx('hidden')}></span>
					</li>
				</ul>
				{mobile < 481 ? (
					<span className={cx('disagree')}>
						매우
						<br />
						그렇지 않다
					</span>
				) : (
					<span className={cx('agree')}>매우 그렇지 않다</span>
				)}
			</div>
		</div>
	);
};

export default Tendency;
