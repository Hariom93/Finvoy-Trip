import HolidaysDetails from "../pages/HolidaysDetails"; 
import Navbar from '../components/Navbar';
import React from 'react';
import MainHome from '../pages/MainHome';
import MyTrips from "../pages/Account/MyTrips";
import FinvoyTripWallet from "../pages/Account/FinvoyTripWallet";
import Offers from "../pages/Offers.jsx";
import PackagePage from "../pages/PackagePage";
import InviteCard from "../pages/Account/InviteCard";
import Work from "../pages/Work";
import HongKongPage from "../pages/HongKongPage";
import SaudiPage from "../pages/SaudiPage";
import WesternAmericaPage from "../pages/WesternAmericaPage";
import BusPass from "../pages/Account/Buspas";
import { Routes, Route } from "react-router-dom";
import HolidayDetails from '../Trips/HolidayDetails';
import Flightdetail from '../Flight/FlightDetails';
import ScrollToTop from '../components/ScrollToTop';
import SavePayment from '../pages/Account/SavePayment';
import FlightResults from '../Flight/flights';
import Review from '../Flight/Flightcan';
import SeatSelection from '../Flight/SeatSelect';
import Holidays from '../pages/Holidays';
import ExclusiveOffer from "../pages/ExclusiveOffer";
import ExclusiveOfferDetails from '../pages/ExclusiveOfferDetails';
import Destinations from '../pages/PopularDestinations/Destinations';
import DestinationDetail from "../Trips/TripComponents/DestinationDetail";
import DestinationDetails from "../pages/PopularDestinations/DestinationDetails";
import DetailCard from '../pages/Getawayspage/DetailCard';
import Account from "../pages/Account/Account";
import TravellerDetails from "../Flight/travellerDetail";

// import Dehlii from "../PopularDestinationss/Dehlii.jsx";
// import Dubai from "../PopularDestinationss/Dubai.jsx";
// import Singapore from "../PopularDestinationss/Singapore.jsx";
// import Goa from "../PopularDestinationss/Goa.jsx";
// import Mumbai from "../PopularDestinationss/Mumbai.jsx";
// import Bangalore from "../PopularDestinationss/Banglore.jsx";


const Allroutes = () => {
  return (
    <>
      <ScrollToTop />
      <div>
        <Routes>

          {/* Popular Destination Pages
          <Route path="/populardestinationss/dehlii" element={<Dehlii />} />
          <Route path="/populardestinationss/dubai" element={<Dubai />} />
          <Route path="/populardestinationss/singapore" element={<Singapore />} />
          <Route path="/populardestinationss/goa" element={<Goa />} />
          <Route path="/populardestinationss/mumbai" element={<Mumbai />} />
          <Route path="/populardestinationss/bangalore" element={<Bangalore />} /> */}

          {/* Dynamic Destination Detail */}
          <Route path="/offers" element={<Offers />} />
          <Route path="/work" element={<Work />} />
          <Route path="/destination/:id" element={<DestinationDetail />} />
          <Route path="/destinations/:id" element={<DestinationDetails />} />
          <Route path="/exclusiveoffer" element={<ExclusiveOffer />} />
          <Route path="/exclusiveofferfdetails/:id" element={<ExclusiveOfferDetails />} />
          <Route path="/detail/:destination/:id" element={<DetailCard />} />
          {/* Holidays */}
          <Route path="/holidays" element={<Holidays />} />
          <Route path="/holiday/:id" element={<HolidaysDetails />} />

          {/* Main */}
          <Route path="/" element={<MainHome />} />

          {/* Account */}
          <Route path="/account" element={<Account />} />
          <Route path="/account/mytrips" element={<MyTrips />} />
          <Route path="/account/InviteCard" element={<InviteCard />} />
          <Route path="/account/finvoytripwallet" element={<FinvoyTripWallet />} />
          <Route path="/account/savepayment" element={<SavePayment />} />
          <Route path="/account/buspass" element={<BusPass />} />

          {/* Flight */}
          <Route path="/flight" element={<Flightdetail />} />
          <Route path="/results" element={<FlightResults />} />
          <Route path="/flightconf" element={<Review />} />
          <Route path="/seats" element={<SeatSelection />} />
          <Route path="/traveller-details" element={<TravellerDetails />} />

          {/* Packages */}
          <Route path="/package/:id" element={<PackagePage />} />

          {/* Country Pages */}
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
