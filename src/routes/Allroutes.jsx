import Navbar from '../components/Navbar';
import React from 'react';
import MainHome from '../pages/MainHome';
import MyTrips from "../pages/account/MyTrips"; // ✅ matches folder structure
import FinvoyTripWallet from "../pages/account/FinvoyTripWallet"; // ✅ matches folder structure
import Offers from "../pages/Offers";
import PackagePage from "../pages/PackagePage";
import Account from "../pages/account/Account"; // ✅ matches folder structure
import InviteCard from "../pages/account/InviteCard"; // ✅ matches folder structure
import Work from "../pages/Work";
import HongKongPage from "../pages/HongKongPage";
import SaudiPage from "../pages/SaudiPage";
import WesternAmericaPage from "../pages/WesternAmericaPage";
import BusPass from "../pages/account/Buspas"; // ✅ folder structure corrected
import { Routes, Route } from "react-router-dom";
import HolidayDetails from '../Trips/HolidayDetails';
import Flightdetail from '../Flight/FlightDetails';
import ScrollToTop from '../components/ScrollToTop';
import SavePayment from '../pages/account/SavePayment'
const Allroutes = () => {
  return (
    <>
      <ScrollToTop /> 
      <div className="pb-16">
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/account/mytrips" element={<MyTrips />} />
          <Route path="/account/InviteCard" element={<InviteCard />} />
          <Route path="/account/finvoytripwallet" element={<FinvoyTripWallet />} />
          <Route path="/account/SavePayment" element={<SavePayment />} />
          <Route path="/account/buspass" element={<BusPass />} />
          <Route path="/account" element={<Account />} /> {/* ✅ fixed path */}
          <Route path="/offers" element={<Offers />} />
          <Route path="/work" element={<Work />} />
          <Route path="/flight" element={<Flightdetail />} />
          <Route path="/holiday" element={<HolidayDetails />} />
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
