import React from 'react';
import styles from '@/components/AuthInput.module.scss';

/**
 * 재사용 인풋 컴포넌트
 * @param {} props(속성으로 사용할 것들을 갯수 상관없이 쓰면 됨)
 */
const AuthInput = (props) => {
	return (
		<div className={styles['input-box']}>
			<input {...props} className={styles.input} onChange={props.onChange} />
		</div>
	);
};

export default AuthInput;
