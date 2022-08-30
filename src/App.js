import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TeamsProvider, PositionsProvider, LaptopBrandProvider, LaptopCPUsProvider } from './context'
import { Landing, AddRecord, Records } from "./pages";

const App = () => {

	return (
		<BrowserRouter>
			<LaptopCPUsProvider>
				<LaptopBrandProvider>
					<PositionsProvider>
						<TeamsProvider>
							<Routes>
								<Route path='/' element={<Landing />} />
								<Route path='/add-record' element={<AddRecord />} />
								<Route path='/records' element={<Records />} />
							</Routes>
						</TeamsProvider>
					</PositionsProvider>
				</LaptopBrandProvider>
			</LaptopCPUsProvider>
		</BrowserRouter>
	);
};

export default App;
