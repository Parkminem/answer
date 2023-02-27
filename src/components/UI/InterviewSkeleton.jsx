import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useRecoilValue } from 'recoil';
import PageCard from '@/components/UI/PageCard';
import styles from '@/components/UI/InterviewSkeleton.module.scss';
import dropdownImg from '@/assets/images/common/dropdown.png';
import { typeState } from '@/store/interview';

const InterviewSkeleton = () => {
	const cx = classNames.bind(styles);
	const [selected, setSelected] = useState(false);
	const type = useRecoilValue(typeState);

	useEffect(() => {
		if (type !== '진단 항목을 선택해주세요') {
			setSelected(true);
		} else {
			setSelected(false);
		}
	}, [type]);
	return (
		<PageCard>
			<div className={cx('sidebar')}>
				<div className={cx('sidebar-wrap')}>
					<h1>면접 진단하기</h1>
					<div className={cx('sidebar__select-box')}>
						<div className={cx('sidebar__select-box__default', selected ? 'selected' : '')}>
							<button>
								<span className={cx('sidebar__select-box__default__span')}>{type}</span>
							</button>
							<img src={dropdownImg} alt="드롭다운" />
						</div>
					</div>
					<div className={cx('sidebar__info-box')}>
						<div className={cx('sidebar__info-box__count')}>
							<span className={cx('now')}></span>
						</div>
						<h2></h2>
						<div className={cx('sidebar__info-box__test-box')}></div>
					</div>
				</div>
			</div>
			<div className={cx('container')}>
				<span className={cx('progress-bar')}></span>
				<span className={cx('text-box')}></span>
			</div>
		</PageCard>
	);
};

export default InterviewSkeleton;
