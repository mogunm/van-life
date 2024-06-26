import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import VanDetail from './pages/Vans/VanDetail';
import Vans from './pages/Vans/Vans';
import Dashboard from './pages/Host/Dashboard';
import Reviews from './pages/Host/Reviews';
import Income from './pages/Host/Income';
import Layout from './components/Layout';
import HostLayout from './components/HostLayout';
import HostVans from './pages/Host/HostVans';
import HostVanDetails from './pages/Host/HostVanDetails';
import HostVanInfo from './pages/Host/HostVanInfo';
import HostVanPhotos from './pages/Host/HostVanPhotos'
import HostVanPricing from './pages/Host/HostVanPricing'
import NotFound from "./pages/NotFound"
import AuthRequired from './components/AuthRequired'
import Login from './pages/Login';

import "./server"

export default function App() {
  // using relative path instead of absolute for nested routes 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="login" element={<Login />} />
          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetails />}> 
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}