import React from 'react';
import classNames from 'classnames/bind';
import styles from '@/components/Tendency.module.scss';

const Tendency = () => {
	const cx = classNames.bind(styles);
	return (
		<div className={cx('tendency')}>
			<div className={cx('tendency-question')}>
				<span className={cx('tendency-question__num')}>Q6.</span>
				<p>나는 타인과 대화하는 것에 어려움이 없다.</p>
			</div>
			<div className={cx('tendency-select-box')}>
				<span className={cx('agree')}>동의</span>
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
				<span className={cx('disagree')}>비동의</span>
			</div>
		</div>
	);
};

export default Tendency;
