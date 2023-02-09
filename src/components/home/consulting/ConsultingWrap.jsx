import React from 'react';
import MainSubTitle from '@/components/common/MainSubTitle';
import styles from '@/components/home/consulting/ConsultingWrap.module.scss';
import Medal from '@/assets/images/image/consulting_medal.png';
import classNames from 'classnames/bind';

const ConsultingWrap = () => {
	const cx = classNames.bind(styles);
	return (
		<section className={cx('consulting-wrap')}>
			<MainSubTitle
				number="03"
				title="합격률을 자랑하다."
				subText="다수 인원이 아닌, 오직 당신만을 위한"
				mainText="1:1 면접 컨설팅"
			/>
			<div className={cx('consulting-image-box')}>
				<img src={Medal} alt="1:1 면접 컨설팅" />
			</div>
		</section>
	);
};

export default ConsultingWrap;
