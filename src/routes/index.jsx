import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import CreateAccount from '../pages/CreateAccount';
import Login from '../pages/Login';
import Home from '../pages/Home';

const isAuthenticated = () => {
  return localStorage.getItem('authToken') !== null;
};

const ProtectedRoutes = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/new-account" element={<CreateAccount />} />

        <Route element={<Login />}>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route
          path="/home"
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}
