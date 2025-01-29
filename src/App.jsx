import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routers/Routes';
import './scss/global.scss';
import './styles.css';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <ToastContainer position='top-center' autoClose={5000} hideProgressBar={true} />
      <Header />
        <AppRoutes />
      <Footer />
    </Router>
  )
}

export default App
