import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from '@/components/Tendency.module.scss';
import { useRecoilState } from 'recoil';
import { repliesState, scoreState } from '@/store/interview';
import _ from 'lodash';

const Tendency = ({ item }) => {
	const cx = classNames.bind(styles);
	const [val, setVal] = useState('');
	const [score, setScore] = useRecoilState(scoreState);
	const [replies, setReplies] = useRecoilState(repliesState);

	const valHandler = (e) => {
		setVal(e.target.dataset.val);

		setScore(e.target.dataset.score);
		let index = item.propensitySurveyQuestionCode - 1;
		const newReplies = _.cloneDeep(replies);

		newReplies.requestPropensityReplyDetails[index] = {
			propensitySurveyQuestionCode: item.propensitySurveyQuestionCode,
			propensitySurveyQuestionContent: item.questionContent,
			measure: item.measure,
			scoringBackwards: item.scoringBackwards,
			replyContent: score,
		};
		setReplies(newReplies);
	};

	return (
		<div className={cx('tendency')}>
			<div className={cx('tendency-question')}>
				<span className={cx('tendency-question__num')}>{item.sequence}.</span>
				<p>{item.questionContent}</p>
			</div>
			<div className={cx('tendency-select-box')}>
				<span className={cx('agree')}>매우 그렇다</span>
				<ul>
					<li>
						<span className={cx('hidden')}></span>
						<button data-score="1" data-val="A" onClick={valHandler}>
							<span data-score="1" data-val="A"></span>
						</button>
						<span></span>
					</li>
					<li>
						<span></span>
						<button data-score="2" data-val="B" onClick={valHandler}>
							<span data-score="2" data-val="B"></span>
						</button>
						<span></span>
					</li>
					<li>
						<span></span>
						<button data-score="3" data-val="C" onClick={valHandler}>
							<span data-score="3" data-val="C"></span>
						</button>
						<span></span>
					</li>
					<li>
						<span></span>
						<button data-score="4" data-val="D" onClick={valHandler}>
							<span data-score="4" data-val="D"></span>
						</button>
						<span></span>
					</li>
					<li>
						<span></span>
						<button data-score="5" data-val="E" onClick={valHandler}>
							<span data-score="5" data-val="E"></span>
						</button>
						<span className={cx('hidden')}></span>
					</li>
				</ul>
				<span className={cx('disagree')}>매우 그렇지 않다</span>
			</div>
		</div>
	);
};

export default Tendency;
