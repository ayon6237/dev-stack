import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechnologyCard from './components/TechnologyCard';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Hero />
      <TechnologyCard />
      <Footer />
    </div>
  )
}

export default App
