import { useState } from 'react';
import Router from '@/router';
import { RecoilRoot } from 'recoil';
import GlobalStyles from '@/assets/styles/GlobalStyles';
import { history } from '@/router/history';

function App() {
	const width = window.innerWidth;
	const [mobile, setMobile] = useState(width);

	const minWidth = () => {
		if (mobile > 480) {
			return 1400;
		} else {
			return 360;
		}
	};
	return (
		<RecoilRoot>
			<GlobalStyles />
			<div className="App" style={{ minWidth: `${minWidth()}px` }}>
				<Router history={history} />
			</div>
		</RecoilRoot>
	);
}

export default App;
