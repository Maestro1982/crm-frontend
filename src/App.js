import './App.css';
import DefaultLayout from './components/layout/DefaultLayout';
import DashboardPage from './pages/dashboard/DashboardPage';
import LoginPage from './pages/login/LoginPage';
import AddTicketPage from './pages/new-ticket/AddTicketPage';

function App() {
  return (
    <div className='App'>
      {/* <LoginPage /> */}
      <DefaultLayout>
        {/* <DashboardPage /> */}
        <AddTicketPage />
      </DefaultLayout>
    </div>
  );
}

export default App;
