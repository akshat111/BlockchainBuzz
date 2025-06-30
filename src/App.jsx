import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Coin from "./pages/Coin/Coin";
import Footer from "./components/Footer/Footer";
import Feature from "./pages/feature/Feature";
import Pricing from "./pages/pricing/Pricing";
import Blog from "./pages/blog/Blog";
import Auth from "./pages/auth/Auth";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
        <Route path="/features" element={<Feature />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
