import React from 'react';
import classNames from 'classnames/bind';
import styles from '@/components/common/Footer.module.scss';
import logo from '@/assets/images/common/logo_footer.png';

export default function Footer() {
	const cx = classNames.bind(styles);
	return (
		<footer className={cx('footer')}>
			<div className={cx('footer__left')}>
				<p>더 해답(Answer) 대표자 : 김지윤&nbsp;&nbsp;&nbsp;사업자등록번호 : 432-91-01752</p>
				<p>서울시 강서구 마곡중앙로 55(마곡동, 문영 퀸즈파크13)&nbsp;&nbsp;&nbsp;ⓒ 2023 해답(Answer)</p>
				<img src={logo} alt="answer" />
			</div>
			<div className={cx('footer__right')}>
				<h2>Customer Service</h2>
				<p>T. 02-2662-0991</p>
				<p>E. seumspeech@naver.com</p>
			</div>
		</footer>
	);
}
