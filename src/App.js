import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <div>
        <Header />
        <Sidebar />
      </div>

      <div>
        <About />
        <Skills />
        <Portfolio />
        <Footer />
      </div>

    </div>
  );
}

export default App;

