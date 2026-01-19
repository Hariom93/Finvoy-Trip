import HolidaysDetails from "../pages/HolidaysDetails"; 
import Navbar from '../components/Navbar';
import React from 'react';
import MainHome from '../pages/MainHome';
import MyTrips from "../pages/Account/MyTrips";
import FinvoyGlobalWallet from "../pages/Account/FinvoyTripWallet";
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
import ScrollToTop from '../components/ScrollToTop';
import Holidays from '../pages/Holidays';
import ExclusiveOffer from "../pages/ExclusiveOffer";
import ExclusiveOfferDetails from '../pages/ExclusiveOfferDetails';
import Destinations from '../pages/PopularDestinations/Destinations';
import DestinationDetail from "../Trips/TripComponents/DestinationDetail";
import DestinationDetails from "../pages/PopularDestinations/DestinationDetails";
import DetailCard from '../pages/Getawayspage/DetailCard';
import Account from "../pages/Account/Account";
import Hotels from '../pages/Bookings/Hotels.jsx'
import HotelsDetails from '../pages/Bookings/HotelsDetails.jsx'
import Taxi from '../pages/Bookings/Taxi.jsx'
import TaxiDetails from '../pages/Bookings/TaxiDetails.jsx'
import Login from "../pages/Auth/Login.jsx";
import HotelForm from "../components/hotel-enquiry-form/hotel-form.jsx";
import FlightForm from "../components/hotel-enquiry-form/flight-form.jsx";
// import Dehlii from "../PopularDestinationss/Dehlii.jsx";
// import Dubai from "../PopularDestinationss/Dubai.jsx";
// import Singapore from "../PopularDestinationss/Singapore.jsx";
// import Goa from "../PopularDestinationss/Goa.jsx";
// import Mumbai from "../PopularDestinationss/Mumbai.jsx";
// import Bangalore from "../PopularDestinationss/Banglore.jsx";
import ComingSoon from "../pages/Account/comming.jsx";
import AboutUs from "../pages/Work";


const Allroutes = () => {
  return (
    <>
      <ScrollToTop />
      <div>
        <Routes>

           {/* <Route path="/hotal" element={<Hotels />} /> */}
          
          {/* <Route path="/hotel/:id" element={<HotelsDetails/>} /> */}
        <Route path="/comming" element={<ComingSoon />} />
          {/* <Route path="/taxi" element={<Taxi />} /> */}
          {/* <Route path="/taxi/:id" element={<TaxiDetails />} /> */}

          <Route path="/offers" element={<Offers />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/destination/:id" element={<DestinationDetail />} />
          <Route path="/destinations/:id" element={<DestinationDetails />} />
          <Route path="/exclusiveoffer" element={<ExclusiveOffer />} />
          <Route path="/exclusiveofferfdetails/:id" element={<ExclusiveOfferDetails />} />
          <Route path="/detail/:destination/:id" element={<DetailCard />} />
          {/* Holidays */}
          {/* <Route path="/holidays" element={<Holidays />} /> */}
          {/* <Route path="/holidays/:id" element={<HolidaysDetails />} /> */}

          {/* Main */}
          <Route path="/" element={<MainHome />} />

          {/* Account */}
          <Route path="/contact" element={<Account />} />
      
          {/* Flight */}
       
          {/* Packages */}
          {/* <Route path="/package/:id" element={<PackagePage />} /> */}

          {/* Country Pages */}
          <Route path="/hongkong" element={<HongKongPage />} />
          <Route path="/saudi" element={<SaudiPage />} />
          <Route path="/western-america" element={<WesternAmericaPage />} />
          <Route path="/hotel-form" element={<HotelForm />} />
          <Route path="/flight-form" element={<FlightForm />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Navbar />
    </>
  );
};

export default Allroutes;
