import React, { useContext } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import DetailPage from "./Component/DetailPage";
import FillForm from "./Component/FillForm";
import MainPage from "./Component/MainPage";

import AboutUs from "./Component/AboutUs";
import ContactUs from "./Component/ContactUs";

import Context from "./contextApi/contextForApp";

function App() {

  
  const MAIN_PAGE = {
    INDEX: "/",
  };
  
  const DETAIL_PAGE = {
    INDEX: "/detail-page",
  };

  const FORM_FILL_PAGE = {
    INDEX: "/fill-form",
  }


  
  const ABOUT_US = {
    INDEX: "/about-us",
  }

  const CONTACT_US = {
    INDEX: "/contact-us",
  }

  return (
    <div className="App">
      <Context>
          <Router>
          <Routes>
            <Route path={MAIN_PAGE.INDEX} element={<MainPage />} />
            <Route path={DETAIL_PAGE.INDEX} element={<DetailPage />} />
            <Route path={FORM_FILL_PAGE.INDEX} element={<FillForm />} />
            <Route path={ABOUT_US.INDEX} element={<AboutUs />} />
            <Route path={CONTACT_US.INDEX} element={<ContactUs />} />
          </Routes>
        </Router>
        </Context>
    </div>
  );
}

export default App;
