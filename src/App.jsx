import Router from '@/router';
import { RecoilRoot } from 'recoil';
import GlobalStyles from '@/assets/styles/GlobalStyles';

function App() {
	return (
		<RecoilRoot>
			<GlobalStyles />
			<div className="App" style={{ minWidth: '1920px' }}>
				<Router />
			</div>
		</RecoilRoot>
	);
}

export default App;
