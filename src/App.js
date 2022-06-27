import './App.css';
import DefaultLayout from './layout/DefaultLayout';
import DashboardPage from './pages/dashboard/DashboardPage';
import LoginPage from './pages/login/LoginPage';
import AddTicketPage from './pages/new-ticket/AddTicketPage';
import TicketListPage from './pages/ticket-list/TicketListPage';
import TicketPage from './pages/ticket/TicketPage';
import PrivateRoute from './components/private-route/PrivateRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/' element={<PrivateRoute />}>
            <Route path='dashboard' element={<DashboardPage />} />
            <Route path='add-ticket' element={<AddTicketPage />} />
            <Route path='tickets' element={<TicketListPage />} />
            <Route path='ticket/:id' element={<TicketPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
