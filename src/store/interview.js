import { atom, atomFamily } from 'recoil';

//주관식 답변
export const answerList = atom({
	key: 'answerList',
	default: [],
});

//스켈레톤 시, 나타낼 타입
export const typeState = atom({
	key: 'type',
	default: '진단 항목을 선택해주세요',
});

//모든 답변들
export const repliesState = atom({
	key: 'repliesState',
	default: {
		userCode: null,
		interviewTypeCode: null,
		requestInterviewReplyDetails: [],
		requestPropensityReplyDetails: [],
	},
});

//객관식 점수
export const scoreState = atom({
	key: 'scoreState',
	default: '',
});

export const tendencyState = atom({
	key: 'tendencyValue',
	default: [],
});

//textCount
export const textCountState = atom({
	key: 'textCountState',
	default: [],
});
