const emailRegx = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/; // 이메일 정규식
const passwordRegx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&.])[A-Za-z\d$@$!%*#?&.]{8,32}$/; // 비밀번호 정규식 ( 영문, 숫자, 특수문자 8~32자 )

export const regx = {
	emailValid(email) {
		return emailRegx.test(email);
	},

	passwordValid(password) {
		return passwordRegx.test(password);
	},
};
