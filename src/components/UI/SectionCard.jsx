import React, { useState } from 'react';
import classNames from 'classnames/bind';
import BreadCrumb from '@/components/myPage/Breadcrumb';
import styles from '@/components/UI/SectionCard.module.scss';

const SectionCard = ({ children }) => {
	const width = window.innerWidth;
	const [mobile, setMobile] = useState(width);
	const cx = classNames.bind(styles);
	return (
		<div className={cx('container')}>
			{mobile > 400 ? <BreadCrumb /> : ''}
			{children}
		</div>
	);
};

export default SectionCard;
