import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { useSelector } from "react-redux";

// Pages
import Home from "../pages/Home";
import Battery from "../pages/Battery";
import Buy from "../pages/Buy";
import Careers from "../pages/Careers";
import Charging from "../pages/Charging";
import Contact from "../pages/Contact";
import Factory from "../pages/Factory";
import Legal from "../pages/Legal";
import Press from "../pages/Press";
import Scooter from "../pages/Scooter";
import Sustainability from "../pages/Sustainability";
import Motorcycles from "../pages/Motorcycles";
import ScooterDetails from "../pages/ScooterDetails";
import MotorCycleDetails from "../pages/MotorCycleDetails";

// ProtectedRoute wrapper
const ProtectedRoute = ({ children }) => {
  // Replace with your real auth logic
  const isAuthenticated = useSelector(
    (state) => state.ui.isAuthenticated || false
  );
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="battery" element={<Battery />} />
        <Route path="buy" element={<Buy />} />
        <Route path="careers" element={<Careers />} />
        <Route path="charging" element={<Charging />} />
        <Route path="contact" element={<Contact />} />
        <Route path="factory" element={<Factory />} />
        <Route path="legal" element={<Legal />} />
        <Route path="press" element={<Press />} />
        <Route path="scooter" element={<Scooter />} />
        <Route path="scooter/:id" element={<ScooterDetails />} />
        <Route path="motorcycles" element={<Motorcycles />} />
        <Route path="motorcycles/:id" element={<MotorCycleDetails />} />
        <Route path="sustainability" element={<Sustainability />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
