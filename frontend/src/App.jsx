import React from 'react';
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import useProvinces from './hooks/useProvince.js';

function AppWrapper() {
  const location = useLocation();

  // Check if the current location is either login or admin
  const isLoginOrAdmin = location.pathname.includes("/login") || location.pathname.includes("/admin");
  useProvinces()
  return (

    <>
      { <Header />}
      <Outlet />
      { <Footer />}
    </>
  );
}

export default AppWrapper;
