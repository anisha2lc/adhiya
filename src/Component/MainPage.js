import React, {useState} from 'react';
import { NavLink, useNavigate } from "react-router-dom";

import "../css/mainpage.css"
import NavBarPage from './NavBarPage';

const MainPage = () => {

const DETAIL_PAGE = {
    INDEX: "/detail-page",
  };

  const FORM_FILL_PAGE = {
    INDEX: "/fill-form",
  }


  return (

    <div className=' main-div'>

<NavBarPage />

      <div className=' second-div'>
        
      <NavLink
          to={FORM_FILL_PAGE.INDEX}
          className="navlink-button-two "
        ><b>  Fill Form</b></NavLink>

      <NavLink
          to={DETAIL_PAGE.INDEX}
          className="navlink-button"
        ><b>Choose Land</b></NavLink>

      </div>



    </div>
  );
}

export default MainPage;