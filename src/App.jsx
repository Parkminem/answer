import Router from '@/route';
import { RecoilRoot } from 'recoil';

function App() {
	return (
		<RecoilRoot>
			<div className="App">
				<Router />
			</div>
		</RecoilRoot>
	);
}

export default App;
