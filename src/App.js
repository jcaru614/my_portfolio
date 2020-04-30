import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Welcome from './components/Welcome';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className='appjs'>
      <div>
        <Header />
        <Sidebar />
      </div>

      <div>
        <Welcome/>
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>

    </div>
  );
}

export default App;

