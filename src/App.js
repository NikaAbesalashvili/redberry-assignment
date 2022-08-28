import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TeamsProvider, PositionsProvider } from './context'
import { Landing, AddRecord, Records } from "./pages";

const App = () => {

	return (
		<BrowserRouter>
			<PositionsProvider>
				<TeamsProvider>
					<Routes>
						<Route path='/' element={<Landing />} />
						<Route path='/add-record' element={<AddRecord />} />
						<Route path='/records' element={<Records />} />
					</Routes>
				</TeamsProvider>
			</PositionsProvider>
		</BrowserRouter>
	);
};

export default App;
