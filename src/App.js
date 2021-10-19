import React from 'react';
import Alpaca from './components/Alpaca';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';

function App() {
	return (
		<>
			<Layout>
				<Header />
				<Alpaca />
			</Layout>
		</>
	);
}

export default App;
