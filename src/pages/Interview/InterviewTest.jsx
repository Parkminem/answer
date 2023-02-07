import SubHeader from '@/components/InterView/SubHeader';
import React from 'react';
import { Link } from 'react-router-dom';
import '@/assets/styles/interview.css';
import img01 from '@/assets/images/image/sub_img01.png';
import img02 from '@/assets/images/image/sub_img02.png';

const InterviewTest = () => {
	return (
		<div className="wrap wrap_basic">
			<SubHeader title="면접 진단 하기" location="면접 진단 하기" currentLocation="테스트 시작하기" />
			<div className="sub_wrap">
				<div className="content_wrap">
					<div className="content">
						<div className="diagnostic_test_wrap">
							<div className="diagnostic_test_box_wrap">
								<dl>
									<dt>면접 진단 테스트</dt>
									<dd>나의 면접 예상 점수는 몇점일까?</dd>
								</dl>
								<p>모의 면접을 시작할까요?</p>
								<Link to="/interviewtest/detail" className="test_btn">
									테스트 시작하기
								</Link>
							</div>
							<div className="diagnostic_test_img01">
								<img src={img01} alt="진단 테스트 이미지" />
							</div>
							<div className="diagnostic_test_img02">
								<img src={img02} alt="진단 테스트 이미지" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InterviewTest;
