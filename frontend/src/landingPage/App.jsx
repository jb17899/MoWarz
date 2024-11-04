import React,{ useState } from 'react';
import Body from './Body';
import Nav from './Nav';
import Footer from './Footer';
import './App.css'

function App(props) {
  return (
    <React.StrictMode>
      <div className='apps'>
      <Nav/>
      <Body/>
      <Footer/>
      </div>
   </React.StrictMode>
  );
}

export default App
