import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import DefaultLayout from '../../layout/DefaultLayout';

const isAuth = false;

const PrivateRoute = ({ children, ...rest }) => {
  return isAuth ? (
    <>
      <DefaultLayout /> <Outlet />
    </>
  ) : (
    <Navigate to='/' />
  );
};

export default PrivateRoute;
