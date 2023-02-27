import React, { useEffect, useState } from 'react';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { history } from '@/router/history';
import classNames from 'classnames/bind';
import styles from '@/pages/FindPw/FindPw.module.scss';
import FindPassword from '@/components/FindPassword';
import EditPassword from '@/components/EditPassword';
import MobileAuthHeader from '@/components/common/MobileAuthHeader';
import { timerState, certificationNumberState, changPwState } from '@/store/auth';

const FindPw = () => {
	const cx = classNames.bind(styles);
	const width = window.innerWidth;
	const [mobile, setMobile] = useState(width);
	const setCount = useSetRecoilState(timerState);
	const setCheckNum = useSetRecoilState(certificationNumberState);
	const [changePw, setChangePw] = useRecoilState(changPwState);

	useEffect(() => {
		const listen = history.listen(
			(location) => {
				if (history.action === 'POP') {
					setChangePw(false);
					setCount(180);
					setCheckNum('');
					window.localStorage.removeItem('user');
				}
			},
			[history],
		);
		return () => listen();
	}, [history]);

	return (
		<>
			{mobile < 401 ? <MobileAuthHeader /> : <></>}
			<div className={cx('find-wrap')}>
				<div className={cx('find')}>{!changePw ? <FindPassword /> : <EditPassword />}</div>
			</div>
		</>
	);
};

export default FindPw;
