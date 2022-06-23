import './App.css';
import DefaultLayout from './components/layout/DefaultLayout';
import LoginPage from './pages/login/LoginPage';

function App() {
  return (
    <div className='App'>
      {/* <LoginPage /> */}
      <DefaultLayout>Dashboard</DefaultLayout>
    </div>
  );
}

export default App;
