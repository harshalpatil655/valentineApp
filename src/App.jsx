import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

/* Pages */
import Landing from "./pages/Landing";
import RoseDay from "./pages/RoseDay";
import ProposeDay from "./pages/ProposeDay";
import ChocolateDay from "./pages/ChocolateDay";
import TeddyDay from "./pages/TeddyDay";
import PromiseDay from "./pages/PromiseDay";
import HugDay from "./pages/HugDay";
import KissDay from "./pages/KissDay";
import ValentineDay from "./pages/ValentineDay";
import FinalValentine from "./pages/FinalValentine";
import Welcome from "./pages/Welcome";
import ComingSoon from "./pages/ComingSoon";

/* Layout */
import Layout from "./components/Layout";

function AppContent() {
  const location = useLocation();

  /* Open access to all routes */
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Landing page */}
          <Route path="/" element={<Landing />} />
          <Route path="/welcome" element={<Welcome />} />

          {/* All days are freely accessible */}
          <Route path="/rose-day" element={<RoseDay />} />
          <Route path="/propose-day" element={<ProposeDay />} />
          <Route path="/chocolate-day" element={<ChocolateDay />} />
          <Route path="/teddy-day" element={<TeddyDay />} />
          <Route path="/promise-day" element={<PromiseDay />} />
          <Route path="/hug-day" element={<HugDay />} />
          <Route path="/kiss-day" element={<KissDay />} />
          <Route path="/valentine-day" element={<ValentineDay />} />
          <Route path="/final-valentine" element={<FinalValentine />} />

          {/* Optional fallback */}
          <Route path="/coming-soon" element={<ComingSoon />} />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/rose-day" replace />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
