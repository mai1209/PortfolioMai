  import './index.css';
  import App from './components/App.jsx';
  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import Contact from './components/Contact.jsx';
  import Work from './components/Work.jsx';
  // 1. CAMBIA LA IMPORTACIÓN AQUÍ
  import { HashRouter, Routes, Route } from 'react-router-dom'; 
  import reportWebVitals from './reportWebVitals.js';

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      {/* 2. Y CAMBIA EL COMPONENTE AQUÍ */}
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </React.StrictMode>
  );

  reportWebVitals();