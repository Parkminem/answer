import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useRecoilState } from 'recoil';
import styles from '@/components/Tendency.module.scss';
import { tendencyState } from '@/store/interview';

const Tendency = ({ item }) => {
	const cx = classNames.bind(styles);

	//클릭css 상태관리
	const [active, setActive] = useState(false);
	const [val, setVal] = useState('');
	const [clicked, setClicked] = useRecoilState(tendencyState);

	//클릭한 버튼 활성화
	const clickHandler = (e) => {
		const index = e.target.dataset.index;
		const formatIdx = index.replace('Q', '');
		const value = e.target.dataset.val;
		const object = { index: formatIdx, value: value };
		setVal(value);
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
	};

	//첫 객관식 활성화, 이전 값 불러오기
	useEffect(() => {
		//각 페이지의 첫 질문 활성화
		if (
			item.sequence === 'Q6' ||
			item.sequence === 'Q11' ||
			item.sequence === 'Q16' ||
			item.sequence === 'Q21' ||
			item.sequence === 'Q26'
		) {
			setActive(true);
		}
		//이전 질문
		if (clicked.length > 0) {
			const idx = item.sequence.replace('Q', '');
			const currentObj = clicked.filter((i) => {
				if (i.index === idx) return i;
			});
			if (currentObj.length === 1) {
				const currentVal = currentObj[0].value;
				setVal(currentVal);
				setActive(true);
			}
		}
	}, []);

	//다음 객관식 활성화
	useEffect(() => {
		if (clicked.length > 0) {
			const last = clicked[clicked.length - 1];
			const idx = item.sequence.replace('Q', '');
			const next = Number(last.index) + 1;
			if (idx == next) {
				setActive(true);
			}
		}
	}, [clicked]);

	return (
		<div className={cx('tendency')}>
			<div className={cx('tendency-question')}>
				<span className={cx('tendency-question__num')}>{item.sequence}.</span>
				<p>{item.questionContent}</p>
			</div>
			<div className={cx('tendency-select-box', active ? '' : 'no-active')}>
				<span className={cx('agree')}>매우 그렇다</span>
				<ul>
					<li className={cx(val === 'A' ? 'checked' : '')}>
						<span className={cx('hidden')}></span>
						<div className={cx('border')}>
							<button data-val="A" data-index={item.sequence} onClick={clickHandler}>
								<span data-val="A" data-index={item.sequence}></span>
							</button>
						</div>
						<span></span>
					</li>
					<li className={cx(val === 'B' ? 'checked' : '')}>
						<span></span>
						<div className={cx('border')}>
							<button data-val="B" data-index={item.sequence} onClick={clickHandler}>
								<span data-val="B" data-index={item.sequence}></span>
							</button>
						</div>
						<span></span>
					</li>
					<li className={cx(val === 'C' ? 'checked' : '')}>
						<span></span>
						<div className={cx('border')}>
							<button data-val="C" data-index={item.sequence} onClick={clickHandler}>
								<span data-val="C" data-index={item.sequence}></span>
							</button>
						</div>
						<span></span>
					</li>
					<li className={cx(val === 'D' ? 'checked' : '')}>
						<span></span>
						<div className={cx('border')}>
							<button data-val="D" data-index={item.sequence} onClick={clickHandler}>
								<span data-val="D" data-index={item.sequence}></span>
							</button>
						</div>
						<span></span>
					</li>
					<li className={cx(val === 'E' ? 'checked' : '')}>
						<span></span>
						<div className={cx('border')}>
							<button data-val="E" data-index={item.sequence} onClick={clickHandler}>
								<span data-val="E" data-index={item.sequence}></span>
							</button>
						</div>
						<span className={cx('hidden')}></span>
					</li>
				</ul>
				<span className={cx('disagree')}>매우 그렇지 않다</span>
			</div>
		</div>
	);
};

export default Tendency;
