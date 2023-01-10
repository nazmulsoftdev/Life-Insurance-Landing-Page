import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Layout from './components/Layout';
import HomePage from './components/pages/HomePage';
import InsurancePage from './components/pages/InsurancePage';
import Notfound from './components/pages/Notfound';
import ServicePage from './components/pages/ServicePage';

function App() {
    return (
      <div>
        <Routes>
          <Route element={<Layout />}>
            <Route index path="/" element={<HomePage />} />
            <Route path="service" element={<ServicePage />} />
            <Route path="insurance" element={<InsurancePage />} />
            <Route path="*" element={<Notfound />}/>
          </Route>
        </Routes>
      </div>
    );
}

export default App;