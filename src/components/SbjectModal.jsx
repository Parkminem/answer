import React, { useState } from 'react';
import Modal from 'react-modal';

export const SbjectModal = (props) => {
	const width = window.innerWidth;
	const [mobile, setMobile] = useState(width);
	// 모달 스타일
	const modalStyle = {
		overlay: {
			position: 'fixed',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: 'rgba(255, 255, 255, 0.45)',
			zIndex: 10,
		},
		content: {
			display: 'flex',
			justifyContent: 'center',
			background: '#ffffe7',
			overflow: 'auto',
			top: '42vh',
			left: '38vw',
			right: '38vw',
			bottom: '42vh',
			WebkitOverflowScrolling: 'touch',
			borderRadius: '14px',
			outline: 'none',
			zIndex: 10,
		},
	};
	const mobileModalStyle = {
		overlay: {
			position: 'fixed',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: 'rgba(255, 255, 255, 0.45)',
			zIndex: 10,
		},
		content: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			background: '#FFFFFF',
			overflow: 'auto',
			top: '40vh',
			left: '-3vw',
			right: '-3vw',
			bottom: '40vh',
			WebkitOverflowScrolling: 'touch',
			borderRadius: '14px',
			outline: 'none',
			zIndex: 10,
		},
	};
	return (
		<>
			<Modal
				isOpen={true}
				style={mobile < 481 ? mobileModalStyle : modalStyle}
				// onRequestClose={} // 오버레이나 esc를 누르면 핸들러 동작
				ariaHideApp={false}
			>
				모달 내용 or 컴포넌트
			</Modal>
			<button onClick></button>
		</>
	);
};
