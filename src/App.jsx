import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import Partners from "./Pages/Partners";
import Blog from "./Pages/Blog";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import WhatsApp from "./Components/WhatsApp";
import ScrollTopButton from "./Components/ScrollTopButton";
import LookingForPopup from "./Components/LookingForPopup";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <LookingForPopup />
      <Header />

      <main className="main-with-fixed-nav">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
      <WhatsApp />
      <ScrollTopButton />
    </Router>
  );
};

export default App;
