import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Welcome from './components/Welcome';
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
        <Welcome />
        <About />
        <Skills />
        <Portfolio />
        <Footer />
      </div>

    </div>
  );
}

export default App;

