import { atom } from 'recoil';

export const timerState = atom({
	key: 'timer',
	default: 180,
});

export const certificationNumberState = atom({
	key: 'certificationNumber',
	default: '',
});

export const userEmailState = atom({
	key: 'userEmail',
	default: '',
});

export const changPwState = atom({
	key: 'changePw',
	default: false,
});
