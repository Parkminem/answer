import React from 'react';
import classNames from 'classnames/bind';
import styles from '@/components/common/MobileFooter.module.scss';

const MobileFooter = () => {
	const cx = classNames.bind(styles);

	return (
		<footer className={cx('footer')}>
			<div className={cx('footer__inner')}>
				<div className={cx('footer__link-box')}>
					<ul>
						<li>
							<a href="">통합 약관</a>
						</li>
						<li>
							<a href="">이용 약관</a>
						</li>
						<li>
							<a href="">개인정보 처리방침</a>
						</li>
						<li>
							<a href="">PC 버전</a>
						</li>
					</ul>
				</div>
				<div className={cx('footer__body')}>
					<div className={cx('footer__body__tel-box')}>
						<h2>Customer Service</h2>
						<p>T. 02-2662-0991</p>
						<p>E. seumspeech@naver.com</p>
					</div>
					<div className={cx('footer__body__text-box')}>
						<h1>더 해답(Answer)</h1>
						<p>대표: 김지윤 | 서울시 강서구 마곡중앙로 55 (마곡동, 문영 퀸즈파크13)</p>
						<p>사업자등록번호: 432-91-01752</p>
						<p>Copyright ⓒ2023 해답(Answer), All Rights Reserved.</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default MobileFooter;
