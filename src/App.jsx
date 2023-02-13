import Router from '@/router';
import { RecoilRoot } from 'recoil';
import GlobalStyles from '@/assets/styles/GlobalStyles';
import '@/assets/styles/font.css';

function App() {
	return (
		<RecoilRoot>
			<div className="App">
				<GlobalStyles />
				<Router />
			</div>
		</RecoilRoot>
	);
}

export default App;
