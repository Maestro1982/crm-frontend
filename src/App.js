import './App.css';
import DefaultLayout from './components/layout/DefaultLayout';
import DashboardPage from './pages/dashboard/DashboardPage';
import LoginPage from './pages/login/LoginPage';
import AddTicketPage from './pages/new-ticket/AddTicketPage';
import TicketListPage from './pages/ticket-list/TicketListPage';

function App() {
  return (
    <div className='App'>
      {/* <LoginPage /> */}
      <DefaultLayout>
        {/* <DashboardPage /> */}
        {/* <AddTicketPage /> */}
        <TicketListPage />
      </DefaultLayout>
    </div>
  );
}

export default App;
