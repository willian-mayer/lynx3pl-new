// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WhyUsPage from "./pages/WhyUsPage";
import FulfillmentPage from "./pages/FulfillmentPage";
import WarehousingPage from "./pages/WarehousingPage";
import TransloadingPage from "./pages/TransloadingPage";
import SpaceRentalPage from "./pages/SpaceRentalPage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/why-us" element={<WhyUsPage />} />
        <Route path="/fulfillment" element={<FulfillmentPage />} />
        <Route path="/warehousing" element={<WarehousingPage />} />
        <Route path="/transloading" element={<TransloadingPage />} />
        <Route path="/space-rental" element={<SpaceRentalPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
