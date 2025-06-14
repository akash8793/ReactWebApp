import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';  // import your Layout
import Dashboard from './components/pages/Dashboard';
import Master from './components/pages/Master';
import Transaction from './components/pages/Transaction';
import Report from './components/pages/Report';
import CategoryMst from './components/Master/Category/CategoryMst';
import CategoryMstable from './components/Master/Category/CategoryMstable';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/master" element={<Master />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/report" element={<Report />} />
          <Route path="/categorymst" element={<CategoryMst />} />
          <Route path="/categorymstable" element={<CategoryMstable />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
