<<<<<<< HEAD
import Navbar from '../components/Navbar';
import React from 'react';
import MainHome from '../pages/MainHome';
import MyTrips from "../pages/MyTrips";
import Offers from "../pages/Offers";
import PackagePage from "../pages/PackagePage";
import Account from "../pages/Account";
import Work from "../pages/Work";
import HongKongPage from "../pages/HongKongPage";
import SaudiPage from "../pages/SaudiPage";
import WesternAmericaPage from "../pages/WesternAmericaPage";


import { Routes, Route } from "react-router-dom";
import HolidayDetails from '../Trips/HolidayDetails';
import Flightdetail from '../Flight/FlightDetails';

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
          <Route path="/flight" element={<Flightdetail/>} />
          <Route path="/holiday" element={<HolidayDetails/>} />
         <Route path="/package/:id" element={<PackagePage />} />
          <Route path="/hongkong" element={<HongKongPage />} />
          <Route path="/saudi" element={<SaudiPage />} />
          <Route path="/western-america" element={<WesternAmericaPage />} />
        </Routes>
      </div>

      <Navbar />
    </>
  );
};

export default Allroutes;
=======
import React from 'react'
import MainHome from '../pages/MainHome'
const Allroutes = () => {
  return (
    <div>
      <MainHome/>
    </div>
  )
}

export default Allroutes
>>>>>>> 1a3bda5 (pulling)
