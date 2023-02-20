import React from 'react';
import classNames from 'classnames/bind';
import styles from '@/components/Tendency.module.scss';

const Tendency = ({ item }) => {
	const cx = classNames.bind(styles);
	return (
		<div className={cx('tendency')}>
			<div className={cx('tendency-question')}>
				<span className={cx('tendency-question__num')}>Q{item.id}.</span>
				<p>{item.text}</p>
			</div>
			<div className={cx('tendency-select-box')}>
				<span className={cx('agree')}>매우 그렇다</span>
				<ul>
					<li>
						<span className={cx('hidden')}></span>
						<button>
							<span></span>
						</button>
						<span></span>
					</li>
					<li>
						<span></span>
						<button>
							<span></span>
						</button>
						<span></span>
					</li>
					<li>
						<span></span>
						<button>
							<span></span>
						</button>
						<span></span>
					</li>
					<li>
						<span></span>
						<button>
							<span></span>
						</button>
						<span></span>
					</li>
					<li>
						<span></span>
						<button>
							<span></span>
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
