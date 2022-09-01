import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
	RecordDataProvider,
	TeamsProvider,
	PositionsProvider,
	LaptopBrandProvider,
	LaptopCPUsProvider,
} from './context'
import { Landing, AddRecord, Records } from "./pages";

const App = () => {

	return (
		<BrowserRouter>
			<RecordDataProvider>
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
			</RecordDataProvider>
		</BrowserRouter>
	);
};

export default App;
