/**
 * 이메일 검증 함수
 * @author sohee
 */
const mailReg = new RegExp(
	"([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])",
);

const regFunc = { mailReg };

export default regFunc;
