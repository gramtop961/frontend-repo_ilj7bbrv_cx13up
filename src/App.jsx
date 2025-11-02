import React from 'react';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div className="scroll-smooth bg-black font-sans text-white">
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
