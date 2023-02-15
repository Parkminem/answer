import React from 'react';
import classNames from 'classnames/bind';
import BreadCrumb from '@/components/myPage/Breadcrumb';
import styles from '@/components/UI/SectionCard.module.scss';

const SectionCard = ({ children }) => {
	const cx = classNames.bind(styles);
	return (
		<div className={cx('container')}>
			<BreadCrumb />
			{children}
		</div>
	);
};

export default SectionCard;
