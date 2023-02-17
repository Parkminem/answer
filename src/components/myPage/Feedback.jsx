import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from '@/components/myPage/Feedback.module.scss';
import InterviewTab from '@/components/InterviewTab';
import TeacherModal from '@/components/myPage/TeacherModal';

const Feedback = () => {
	const cx = classNames.bind(styles);
	const [modal, setModal] = useState(false);

	const onClose = () => {
		setModal(false);
	};
	const onOpen = () => {
		setModal(true);
	};
	return (
		<>
			<InterviewTab />
			{modal && <TeacherModal onConfirm={onClose} />}
			<section className={cx('feedback')}>
				<div className={cx('feedback-inner')}>
					<div className={cx('feedback__title-box')}>
						<h1>면접 진단 테스트</h1>
						<p>나의 면접 예상 점수는 몇 점일까?</p>
					</div>
					<div className={cx('feedback__recommend-box')}>
						<button onClick={onOpen}>
							<span>면접 진단 전문가 추천</span>
						</button>
					</div>
					<div className={cx('feedback__word-box')}>
						<h2>
							가장 많이 언급한 단어 <strong>TOP5</strong>
						</h2>
						<ul className={cx('feedback__word-box__list')}>
							<li>
								<span>1</span>
								<span>피자</span>
							</li>
							<li>
								<span>2</span>
								<span>치킨</span>
							</li>
							<li>
								<span>3</span>
								<span>짜장면</span>
							</li>
							<li>
								<span>4</span>
								<span>짬뽕</span>
							</li>
							<li>
								<span>5</span>
								<span>탕수육</span>
							</li>
						</ul>
					</div>
					<div className={cx('feedback__sentence-box')}>
						<h3>
							면접관이 주목할만한 상위 문장 <strong>TOP3</strong>
						</h3>
						<div className={cx('feedback__sentence-box__sentence', 'top3')}>
							<p>
								<span className={cx('num')}>1.</span>그런 상황이 왔을 때 적극적으로 동참하고 봉사할 수
								있는 간호사가 되고 싶어 지원하게 되었습니다.
							</p>
							<p>
								<span className={cx('num')}>2.</span>저는 고등학교 때 부터 취약 계층과 지역사회
								어르신들을 위하여 많은 활동들을 해 왔습니다.
							</p>
							<p>
								<span className={cx('num')}>3.</span>이 일로 인해 다른 친구들이 더 힘들어 하는 모습을
								보면서 맡은 일에 스스로 최선을 다하지 않으면 누군가는 그 일을 2배로 해야 한다는 것을
								느끼게 되었습니다.
							</p>
						</div>
					</div>
					<div className={cx('feedback__sentence-box')}>
						<h3>전체 답변 요약</h3>
						<div className={cx('feedback__sentence-box__sentence')}>
							<p>
								대구에서 코로나19 대유행이 일어났을 때 사명감을 갖고 일하는 의료진들을 보며 간호사를
								꿈꾸게 되었습니다. 평소 저는 교내 봉사활동 동아리를 만들어 활동할 정도로 꾸준히
								봉사활동을 해왔습니다. 항상 주변의 ***에 관심이 많고 ***하며 *** 합니다. 그런 제게
								봉사하는 의료진들은 ***한 모습으로 다가왔고. 그들을 보며 처음 간호사라는 직업에 대해
								생각하게 되었습니다. 저도 ***한 간호사가 되고 싶습니다. 코로나19와 같이 의료인으로
								일하면서 만날 수 있는 극한의 상황이 많을 것이라고 생각합니다. 그러한 상황이 왔을 때
								적극적으로 **하고 ***할 수 있는 간호사가 되고싶어 지원하게 되었습니다.
							</p>
						</div>
					</div>
					<div className={cx('feedback__sentence-box')}>
						<h3>답변 리스트</h3>
						<div className={cx('feedback__sentence-box__desc')}>
							<p>
								<span className={cx('num')}>01.</span>1번째 면접 질문의 3번째 문단입니다.
							</p>
							<div className={cx('feedback__sentence-box__sentence')}>
								<p>
									<span className={cx('num', 'point')}>핵심 문장 ▶</span>저는 고등학교 때 부터 취약
									계층과 지역사회 어르신들을 위하여 많은 활동들을 해 왔습니다.
								</p>
							</div>
						</div>
						<div className={cx('feedback__sentence-box__desc')}>
							<p>
								<span className={cx('num')}>02.</span>2번째 면접 질문의 7번째 문단입니다.
							</p>
							<div className={cx('feedback__sentence-box__sentence')}>
								<p>
									<span className={cx('num', 'point')}>핵심 문장 ▶</span>그런 상황이 왔을 때
									적극적으로 동참하고 봉사할 수 있는 간호사가 되고 싶어 지원하게 되었습니다.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Feedback;
