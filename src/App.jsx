import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import QASamples from './components/QASamples';
import AutomationPortfolio from './components/AutomationPortfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-primary overflow-x-hidden selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <QASamples />
        <AutomationPortfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
