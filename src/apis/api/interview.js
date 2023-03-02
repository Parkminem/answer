import defaultInstance from '@/apis/utils/defaultInstance';

/**
 * 유저의 면접 답변 목록 조회 api
 * @param {number} userCode
 * @returns array(interviewReplyCode, interviewTypeCode, interviewType, replyDate)
 * @author sohee
 */
function getUserAnswerList(userCode) {
	return defaultInstance.get(`/api/v1/users/${encodeURIComponent(userCode)}/interview-replies`);
}

/**
 * 면접 답변 제출 api (모두 작성 후)
 * @param {number} userCode
 * @param {json}data {userCode(number), interviewTypeCode(number), requestInterviewReplyDetails(array:{interviewQuestionCode(number), interviewQuestionContent(string), interviewReplyContent(string)}), requestPropensityReplyDetails(array:{propensitySurveyQuestionCode(number), propensitySurveyQuestionContent(string), measure(string), scrotingBackwards(true), replyContent(string)})}
 * @returns interviewReplyCode, userCode, interviewTypeCode, replyDate
 * @author sohee
 */
function getSubmitInterviewList(userCode, data) {
	return defaultInstance.post(`/api/v1/users/${encodeURIComponent(userCode)}/interview-replies`, data);
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
 * 특정 타입의 면접 문항 조회 api
 * 면접 진단하기 후 특정 타입의 면접 진단을 시작할 때 요청하면 됨
 * @param {number} interviewTypeCode
 * @returns {json}data {responseInterviewQuestions(array:{interviewQuestionCode(number),interviewTypeCode(number), questionContent(string),sequence(string)}), responsePropensityQuestions(array:{propensitySurveyQuestionCode(number), measure(string), questionContent(string),scoringBackwards(true), sequence(string)})}
 * @author sohee
 */
function getDetailInterviewType(interviewTypeCode) {
	return defaultInstance.get(`/api/v1/interview-types/${interviewTypeCode}/interview-questions`);
}
/**
 * 유저의 특정 면접 답변 내용 조회 api
 * @param {num} interviewReplyCode
 * @returns array({questionContent, interviewReplyContent})
 * @author sohee
 */
function getDetailAnswer(interviewReplyCode) {
	return defaultInstance.get(`/api/v1/interview-replies/${interviewReplyCode}`);
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

function getExperts() {}

const interviewApi = {
	getUserAnswerList,
	getSubmitInterviewList,
	getInterviewType,
	getDetailInterviewType,
	getDetailAnswer,
	getFeedback,
};

export default interviewApi;
