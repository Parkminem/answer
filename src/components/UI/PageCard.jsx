import React from 'react';
import classNames from 'classnames/bind';
import styles from '@/components/UI/PageCard.module.scss';

const PageCard = ({ children }) => {
	const cx = classNames.bind(styles);
	return (
		<section className={cx('page-wrap')}>
			<div className={cx('page__container')}>{children}</div>
		</section>
	);
};

export default PageCard;
