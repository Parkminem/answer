import Router from '@/router';
import { RecoilRoot } from 'recoil';
import GlobalStyles from '@/assets/styles/GlobalStyles';

function App() {
	//로컬스토리지의 토큰값 있는지 체크해서, 있으면 header에 login, logout props 내려주는 게 깔끔할 듯...
	//header 합치면 작업...
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
