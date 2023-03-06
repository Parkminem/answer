import { atom } from 'recoil';

export const typeListAtom = atom({
	key: 'type-list-atom',
	default: '',
});

export const textAtom = atom({
	key: 'text-atom',
	default: '',
});

export const textLengthAtom = atom({
	key: 'text-length-atom',
	default: 0,
});

export const answerListAtom = atom({
	key: 'answer-list-atom',
	default: {
		userCode: 0,
		interviewTypeCode: 0,
		requestInterviewReplyDetails: [
			// {
			// 	"interviewQuestionCode": 0,
			// 	"interviewQuestionContent": "string",
			// 	"interviewReplyContent": "string"
			// }
		],
		requestPropensityReplyDetails: [
			// {
			// 	"propensitySurveyQuestionCode": 0,
			// 	"propensitySurveyQuestionContent": "string",
			// 	"measure": "string",
			// 	"scoringBackwards": true,
			// 	"replyContent": "string"
			// }
		],
	},
});
