import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import classNames from 'classnames/bind';
import styles from '@/pages/FindPw/FindPw.module.scss';
import FindPassword from '@/components/FindPassword';
import EditPassword from '@/components/EditPassword';
import { changPwState } from '@/store/auth';

const FindPw = () => {
	const cx = classNames.bind(styles);
	const changePw = useRecoilValue(changPwState);
	return (
		<div className={cx('find-wrap')}>
			<div className={cx('find')}>{!changePw ? <FindPassword /> : <EditPassword />}</div>
		</div>
	);
};

export default FindPw;
