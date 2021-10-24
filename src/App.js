import React from 'react';
import Sidebar from './views/Sidebar';
import Header from './views/Header';
import Welcome from './views/Welcome';
import About from './views/About';
import Skills from './views/Skills';
import Projects from './views/Projects';
import Footer from './views/Footer';

const App = () => {
	return (
		<div className='appjs'>
			<div>
				<Header />
				<Sidebar />
			</div>

			<div>
				<Welcome />
				<About />
				<Skills />
				<Projects />
				<Footer />
			</div>
		</div>
	);
};

export default App;
