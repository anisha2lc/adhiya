import React from 'react';
import { NavLink, useNavigate, Route, Router, Routes } from "react-router-dom";

import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

const NavBarPage = () => {

  const ABOUT_US = {
    INDEX: "/about-us",
  }

  const CONTACT_US = {
    INDEX: "/contact-us",
  }

  return (
    <>
    <div className='nav-bar-div'>

<h1 className='adhiya'>अधिया</h1>

      <div className="navbar">
      <NavLink
          to={ABOUT_US.INDEX}
          className=" "
        ><b>About US</b>
        </NavLink>


<NavLink
          to={CONTACT_US.INDEX}
          className=" "
        ><b>Contact Us</b>
        </NavLink>


      </div>

  </div>
    </>
  )
}

export default NavBarPage