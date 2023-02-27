import { useState } from 'react';
import Router from '@/router';
import { RecoilRoot } from 'recoil';
import GlobalStyles from '@/assets/styles/GlobalStyles';

function App() {
	const width = window.innerWidth;
	const [mobile, setMobile] = useState(width);

	const minWidth = () => {
		if (mobile > 400) {
			return 1920;
		} else {
			return 400;
		}
	};
	return (
		<RecoilRoot>
			<GlobalStyles />
			<div className="App" style={{ minWidth: `${minWidth}px` }}>
				<Router />
			</div>
		</RecoilRoot>
	);
}

export default App;
