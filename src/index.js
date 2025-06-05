
import './index.css';
import App from './components/App.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';

import Work from './components/Work.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import reportWebVitals from './reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();