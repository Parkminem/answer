import defaultInstance from '@/apis/utils/defaultInstance';

/**
 * 성향 설문 데이터 제출 api
 * @param {string} userCode
 * @param {json}data {propensityReply:{userCode:Num, userEmail:string}, propensityReplyDetails:[{propensitySurveyQuestionCode:Num, replyContent:string}]}
 * @returns data 소스에 replyDate, code, propensitySurveyReplyCode 등 추가되서 넘어옴
 * @author sohee
 */
function getPropensityReply(userCode, data) {
	return defaultInstance.post(`/api/v1/users/${userCode}/propensity-relpies`, data);
}

/**
 * 성향 설문조사 문항 목록 조회 api
 * @returns array{code, questionContent, sequence}
 * @author sohee
 */
function getPropensityList() {
	return defaultInstance.get('/api/v1/propensity-questions');
}

/**
 * 성향 설문 문항 생성 api
 * @param {json}data questionContent(string), sequence(string)
 * @returns code, ...data
 * @author sohee
 */
function getProducePropensity(data) {
	return defaultInstance.post('/api/v1/propensity-question', data);
}

const propensityApi = { getPropensityReply, getPropensityList, getProducePropensity };

export default propensityApi;
