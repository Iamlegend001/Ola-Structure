import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

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
        <Route path="sustainability" element={<Sustainability />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
