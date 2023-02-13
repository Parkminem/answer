import React, { useEffect, useRef } from 'react';

/**
 * useEffect 처음 랜더링 막는 hook
 * @author sohee
 */
const useDidMountEffect = (func, deps) => {
	const didMount = useRef(false);

	useEffect(() => {
		if (didMount.current) func();
		else didMount.current = true;
	}, deps);
};

export default useDidMountEffect;
