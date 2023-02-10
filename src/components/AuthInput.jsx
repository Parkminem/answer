import React from 'react';
import styles from '@/components/AuthInput.module.scss';

const AuthInput = (props) => {
	return (
		<div className={styles['input-box']}>
			<input {...props} className={styles.input} onChange={props.onChange} />
		</div>
	);
};

export default AuthInput;
