import React from 'react';
import BestWord from '@/components/InterView/BestWord';
import { wordFreqState } from '@/store/interview';
import { useRecoilState } from 'recoil';

const BestWordList = () => {
	const [wordFreq, setWordFreq] = useRecoilState(wordFreqState);

	return (
		<div className="text_box_basic">
			<ul className="best_word_ul">
				{wordFreq.map((v, i) => (
					<BestWord key={v + i} rank={i + 1} title={v} />
				))}
			</ul>
		</div>
	);
};

export default BestWordList;
