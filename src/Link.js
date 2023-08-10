import React, { Component } from 'react';
import Header from './components/Header.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';
import PhpTest from './components/PhpTest.js'; // THIS IS ONLY USED TO TEST SERVER SIDE PHP SCRIPTS
import './styles/main.scss';

function Link() {
  return (
    <div className='container'>
      <Header />
      <Body />
      <Footer />
      <PhpTest />
    </div>
  );
}

export default Link;