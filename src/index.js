import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import Header from './Header/Header';
import Footer from './Footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);