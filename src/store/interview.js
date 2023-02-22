import { atom } from 'recoil';

//스켈레톤 시, 나타낼 타입
export const typeState = atom({
	key: 'type',
	default: '진단 항목을 선택해주세요',
});
