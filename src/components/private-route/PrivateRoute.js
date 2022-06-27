import React from 'react';
import { Navigate } from 'react-router-dom';
import DefaultLayout from '../../layout/DefaultLayout';

const isAuth = true;

const PrivateRoute = ({ children, ...rest }) => {
  return (
    { ...rest },
    isAuth ? (
      <>
        <DefaultLayout />
      </>
    ) : (
      <Navigate to='/' />
    )
  );
};

export default PrivateRoute;
