import defaultInstance from '@/apis/utils/defaultInstance';

/**
 * 면접 타입 수정 api
 * @param {number} interviewTypeCode
 * @param {json}type interviewType(string)
 * @returns interviewTypeCode, interviewType
 * @author sohee
 */
function getEditInterviewType(interviewTypeCode, type) {
	return defaultInstance.put(`/api/v1/interview-types/${interviewTypeCode}`, type);
}

/**
 * 면접 타입 삭제 api
 * @param {number} interviewTypeCode
 * @returns interviewTypeCode, interviewType
 * @author sohee
 */
function getDeleteInterviewType(interviewTypeCode) {
	return defaultInstance.delete(`/api/v1/interview-types/${interviewTypeCode}`);
}

/**
 * 특정 타입의 면접 문항 수정 api
 * @param {number} interviewTypeCode
 * @param {number} interviewQuestionCode
 * @returns interviewTypeCode, questionContent, sequence
 * @author sohee
 */
function getEditDetailInterviewQuestion(interviewTypeCode, interviewQuestionCode) {
	return defaultInstance.put(
		`/api/v1/interview-types/${interviewTypeCode}/interview-questions/${interviewQuestionCode}`,
	);
}

/**
 * 특정 타입의 면접 문항 삭제 api
 * 수정중이라고 적혀있어 임의로 api 설명 작성한 것.. 확인 필요
 * @param {number} interviewTypeCode
 * @param {number} interviewQuestionCode
 * @returns interviewQuestionCode, interviewTypeCode, questionContent, sequence
 * @author sohee
 */
function getDeleteDetailInterviewQuestion(interviewTypeCode, interviewQuestionCode) {
	return defaultInstance.delete(
		`/api/v1/interview-types/${interviewTypeCode}/interview-questions/${interviewQuestionCode}`,
	);
}

/**
 * 유저의 면접 답변 목록 조회 api
 * @param {number} userCode
 * @returns array(interviewReplyCode, userCode, userEmail, interviewTypeCode, replyDate)
 * @author sohee
 */
function getUserAnswerList(userCode) {
	return defaultInstance.get(`/api/v1/users/${userCode}/interview-replies`);
}

/**
 * 면접 답변 제출 api (모두 작성 후)
 * 진행 중이기 떄문에 사용 전 확인 필요
 * @param {number} userCode
 * @param {json}data {userCode(number), interviewTypeCode(number), requestInterviewReplyDetails(array:{interviewQuestionCode(number), interviewQuestionContent(string), interviewReplyContent(string)})}
 * @returns interviewReplyCode, userCode, interviewTypeCode, replyDate
 * @author sohee
 */
function getSubmitInterviewList(userCode, data) {
	return defaultInstance.post(`/api/v1/users/${userCode}/interview-replies`, data);
}

/**
 * 면접 타입 조회 api
 * 메인 화면에서 요청
 * @returns array({interviewTypeCode, interviewType})
 * @author sohee
 */
function getInterviewType() {
	return defaultInstance.get('/api/v1/interview-types');
}

/**
 * 면접 타입 생성 api
 * @param {json}data interviewType(string)
 * @returns interviewTypeCode, interviewType
 * @author sohee
 */
function getProduceInterviewType(data) {
	return defaultInstance.post('/api/v1/interview-types', data);
}

/**
 * 특정 타입의 면접 문항 조회 api
 * 면접 진단하기 후 특정 타입의 면접 진단을 시작할 때 요청하면 됨
 * @param {number} interviewTypeCode
 * @returns array(interviewQuestionCode, interviewTypeCode, questionContent, sequence)
 * @author sohee
 */
function getDetailInterviewType(interviewTypeCode) {
	return defaultInstance.get(`/api/v1/interview-types/${interviewTypeCode}/interview-questions`);
}

/**
 * 특정 타입의 면접 문항 생성 api
 * @param {number} interviewTypeCode
 * @returns interviewTypeCode, questionContent, sequence
 * @author sohee
 */
function getProduceDetailInterviewType(interviewTypeCode) {
	return defaultInstance.post(`/api/v1/interview-types/${interviewTypeCode}/interview-questions`);
}

/**
 * 유저의 특정 면접 답변에 대한 피드백 조회 api
 * @param {number} interviewReplyCode
 * @returns interviewFeedbackCode,userCode, userEmail, interviewReplyCode, content, feedbackDate
 * @author sohee
 */
function getFeedback(interviewReplyCode) {
	return defaultInstance.get(`/api/v1/interview-replies/${interviewReplyCode}/interview-feedbacks`);
}

const interviewApi = {
	getEditInterviewType,
	getDeleteInterviewType,
	getEditDetailInterviewQuestion,
	getDeleteDetailInterviewQuestion,
	getUserAnswerList,
	getSubmitInterviewList,
	getInterviewType,
	getProduceInterviewType,
	getDetailInterviewType,
	getProduceDetailInterviewType,
	getFeedback,
};

export default interviewApi;
