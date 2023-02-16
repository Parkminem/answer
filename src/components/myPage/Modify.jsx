import React from 'react';
import style from '@/components/myPage/Modify.module.scss';
import SectionCard from '../UI/SectionCard';

export default function Modify() {
	return (
		<div className={style.modify}>
			<div className={style.top_bar}>회원 정보</div>
			<div className={style.content}>
				<div className={style.content_box}>
					<h1 className={style.title}>회원 정보 수정</h1>
					<input type="text" placeholder="123123@example.com" />
					<input type="text" placeholder="비밀번호" />
					<input type="text" placeholder="비밀번호 확인" />
					<button>회원 정보 수정</button>
				</div>
			</div>
		</div>
	);
}
