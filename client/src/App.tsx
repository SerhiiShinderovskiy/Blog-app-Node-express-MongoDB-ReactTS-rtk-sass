import React from 'react';
import './App.scss';
import Router from './routes/Router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className='container'>
      <Navbar/>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;