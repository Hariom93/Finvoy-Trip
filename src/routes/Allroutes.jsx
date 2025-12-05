import Navbar from '../components/Navbar';
import React from 'react';
import MainHome from '../pages/MainHome';
import MyTrips from "../pages/MyTrips";
import Offers from "../pages/Offers";
import Account from "../pages/Account";
import Work from "../pages/Work";
import { Routes, Route } from "react-router-dom";

const Allroutes = () => {
  return (
    <>
      <div className="pb-16">
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/trips" element={<MyTrips />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/account" element={<Account />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </div>

      <Navbar />
    </>
  );
};

export default Allroutes;
