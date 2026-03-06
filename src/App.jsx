import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PropertyList from './components/PropertyList';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <PropertyList />
        <Features />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
