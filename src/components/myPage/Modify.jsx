import React from 'react';
import style from '@/components/myPage/Modify.module.scss';

export default function Modify() {
	return (
		<div className={style.modify}>
			<div className={style.top_bar}>회원 정보</div>
			<div className={style.content}>
				<div className={style.content_box}>
					<h1 className={style.title}>회원 정보 수정</h1>
					<form>
						<input type="text" placeholder="123123@example.com" readOnly />
						<input type="password" name="new-password" placeholder="비밀번호" />
						<input type="password" name="new-password" placeholder="비밀번호 확인" />
					</form>
					<button>회원 정보 수정</button>
				</div>
			</div>
		</div>
	);
}
