import React from "react";
import {Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./pages/HOME/Main";
import AboutPage from "./pages/ABOUT/AboutPage";
import ContactUsPage from "./pages/CONTACT/ContactUsPage";


const App = () => {
  return (
<BrowserRouter>
<Navbar/>
<Routes>

<Route path="/" element={<Main />} />
<Route path="/about" element={<AboutPage />} />
<Route path="/contact" element={<ContactUsPage />} />

</Routes>
<Footer/>

</BrowserRouter>
  );
};

export default App;