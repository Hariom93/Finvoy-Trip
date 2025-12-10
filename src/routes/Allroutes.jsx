import HolidaysDetails from "../pages/HolidaysDetails"; 
import Navbar from '../components/Navbar';
import React from 'react';
import MainHome from '../pages/MainHome';
import MyTrips from "../pages/account/MyTrips";
import FinvoyTripWallet from "../pages/account/FinvoyTripWallet";
import Offers from "../pages/Offers";
import PackagePage from "../pages/PackagePage";
import Account from "../pages/account/Account";
import InviteCard from "../pages/account/InviteCard";
import Work from "../pages/Work";
import HongKongPage from "../pages/HongKongPage";
import SaudiPage from "../pages/SaudiPage";
import WesternAmericaPage from "../pages/WesternAmericaPage";
import BusPass from "../pages/account/Buspas";
import { Routes, Route } from "react-router-dom";
import HolidayDetails from '../Trips/HolidayDetails';
import Flightdetail from '../Flight/FlightDetails';
import ScrollToTop from '../components/ScrollToTop';
import SavePayment from '../pages/account/SavePayment';
import FlightResults from '../Flight/flights';
import Review from '../Flight/Flightcan';
import SeatSelection from '../Flight/SeatSelect';
import Holidays from '../pages/Holidays';
import Destinations from '../pages/PopularDestinations/Destinations'
import DestinationDetail from "../Trips/TripComponents/DestinationDetail";


// import DestinationPage from '../pages/DestinationPage';  // ⭐ add this

const Allroutes = () => {
  return (
    <>
      <ScrollToTop />
      <div className="pb-16">
        <Routes>
          {/* ⭐ Dynamic destination route */}
          {/* <Route path="/destination/:place" element={<DestinationPage />} /> */}
          {/* Holidays routes */}
          <Route path="/holidays" element={<Holidays />} />
          <Route path="/destination/:id" element={<DestinationDetail />} />
          <Route path="/holiday/:id" element={<HolidaysDetails />} />
          <Route path="/" element={<MainHome />} />
          <Route path="/account/mytrips" element={<MyTrips />} />
          <Route path="/account/InviteCard" element={<InviteCard />} />
          <Route path="/account/finvoytripwallet" element={<FinvoyTripWallet />} />
          <Route path="/account/savepayment" element={<SavePayment />} />
          <Route path="/account/buspass" element={<BusPass />} />
          <Route path="/account" element={<Account />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/work" element={<Work />} />
          <Route path="/flight" element={<Flightdetail />} />
          <Route path="/holiday" element={<HolidayDetails />} />
          <Route path="/package/:id" element={<PackagePage />} />
          <Route path="/hongkong" element={<HongKongPage />} />
          <Route path="/saudi" element={<SaudiPage />} />
          <Route path="/western-america" element={<WesternAmericaPage />} />
          <Route path="/results" element={<FlightResults />} />
          <Route path="/flightconf" element={<Review />} />
          <Route path="/seats" element={<SeatSelection />} />
        </Routes>
      </div>
      <Navbar />
    </>
  );
};

export default Allroutes;
