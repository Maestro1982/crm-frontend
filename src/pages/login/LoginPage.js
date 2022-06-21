import React, { useState } from 'react';
import Login from '../../components/login/Login';
import ResetPassword from '../../components/login/reset-password/ResetPassword';
import './loginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loadLogin, setLoadLogin] = useState('login');

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    //TODO call api to submit the form
    console.log(email, password);
  };

  const handleLoginFormSwitch = (formType) => {
    setLoadLogin(formType);
  };

  const handleOnResetSubmit = (e) => {
    e.preventDefault();

    //TODO call api to submit the form
    console.log(email);
  };

  return (
    <div className='login-page'>
      <div className='container-fluid bg-light p-5 w-auto'>
        {loadLogin === 'login' && (
          <Login
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            handleLoginFormSwitch={handleLoginFormSwitch}
            email={email}
            password={password}
          />
        )}

        {loadLogin === 'reset' && (
          <ResetPassword
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnResetSubmit}
            handleLoginFormSwitch={handleLoginFormSwitch}
            email={email}
          />
        )}
      </div>
    </div>
  );
};

export default LoginPage;
