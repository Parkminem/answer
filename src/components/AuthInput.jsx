import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from '@/components/AuthInput.module.scss';

/**
 * 로그인 관련 인풋 컴포넌트
 * @param {} props(속성으로 사용할 것들을 갯수 상관없이 쓰면 됨)
 */
const AuthInput = React.forwardRef((props, ref) => {
	const cx = classNames.bind(styles);
	const [focusing, setFocusing] = useState(false);
	return (
		<div className={cx('input-box', focusing ? 'focus' : '')}>
			<input
				{...props}
				className={styles.input}
				onChange={props.onChange}
				ref={ref}
				onFocus={() => setFocusing(true)}
				onBlur={() => setFocusing(false)}
			/>
		</div>
	);
});
AuthInput.displayName = 'AuthInput';

export default AuthInput;
