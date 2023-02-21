import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from '@/components/Tendency.module.scss';

const Tendency = ({ item }) => {
	const cx = classNames.bind(styles);
	const [val, setVal] = useState('');

	const valHandler = (e) => {
		setVal(e.target.dataset.val);
	};

	return (
		<div className={cx('tendency')}>
			<div className={cx('tendency-question')}>
				<span className={cx('tendency-question__num')}>{item.sequence}.</span>
				<p>{item.measure}</p>
			</div>
			<div className={cx('tendency-select-box')}>
				<span className={cx('agree')}>매우 그렇다</span>
				<ul>
					<li>
						<span className={cx('hidden')}></span>
						<button data-val="A" onClick={valHandler}>
							<span data-val="A"></span>
						</button>
						<span></span>
					</li>
					<li>
						<span></span>
						<button data-val="B" onClick={valHandler}>
							<span data-val="B"></span>
						</button>
						<span></span>
					</li>
					<li>
						<span></span>
						<button data-val="C" onClick={valHandler}>
							<span data-val="C"></span>
						</button>
						<span></span>
					</li>
					<li>
						<span></span>
						<button data-val="D" onClick={valHandler}>
							<span data-val="D"></span>
						</button>
						<span></span>
					</li>
					<li>
						<span></span>
						<button data-val="E" onClick={valHandler}>
							<span data-val="E"></span>
						</button>
						<span className={cx('hidden')}></span>
					</li>
				</ul>
				<span className={cx('disagree')}>매우 그렇지 않다</span>
			</div>
		</div>
	);
};

export default Tendency;
