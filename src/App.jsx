import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from './components/Layout';
import Layout from './components/pages/Layout';
import Dashboard from './components/pages/Dashboard';
import Master from './components/pages/Master';
import Transaction from './components/pages/Transaction';
import Report from './components/pages/Report';
import CategoryMst from './components/Master/Category/CategoryMst';
import CategoryMstable from './components/Master/Category/CategoryMstable';
import Login from './components/pages/Login';
import SalesInvoice from './components/Transactions/SalesInvoice';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Dashboard /></Layout>} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/master" element={<Layout><Master /></Layout>} />
        <Route path="/transaction" element={<Layout><Transaction /></Layout>} />
        <Route path="/report" element={<Layout><Report /></Layout>} />
        <Route path="/categorymst" element={<Layout><CategoryMst /></Layout>} />
        <Route path="/categorymstable" element={<Layout><CategoryMstable /></Layout>} />
        <Route path="/salesinvoice" element={<Layout><SalesInvoice /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;