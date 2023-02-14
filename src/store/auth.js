import { atom } from 'recoil';

export const timer = atom({
	key: 'timer',
	default: 180,
});

export const certificationNumber = atom({
	key: 'certificationNumber',
	default: '',
});

export const userEmail = atom({
	key: 'userEmail',
	default: '',
});
