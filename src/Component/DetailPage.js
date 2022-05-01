import React, {useContext, useEffect, useState} from 'react'
import { useNavigate} from "react-router-dom";

import { InvoiceContext } from '../contextApi/context';

import NavBarPage from './NavBarPage';

import "../css/detailpage.css"

const DetailPage = () => {

  const [value, setValue] = useState([])

  const key= "details";

  const { details, setDetails } = useContext(InvoiceContext);

  let navigate = useNavigate();

  const Redirect = () => {
      navigate("/");
    };


    useEffect(() => {
      if (!details.length) return;
      localStorage.setItem(key, JSON.stringify(details));
    }, [details]);
  
    function init() {
      const value = localStorage.getItem(key);
  
      if (value) {
        setDetails(JSON.parse(value));
      }
    }
    useEffect(() => init(), []);

    const filterName = (event) => {
      const value = event.target.value;
      let currencyResult = [];
  
      currencyResult = details.filter((data, index) => {
        return data[index].location
          .toLocaleLowerCase()
          .includes(value.toLocaleLowerCase());
      });
      setValue(currencyResult);
    };



  return (
    <div className='detail-page'>
<NavBarPage />

<button
                onClick={Redirect}
                className="go-back-button m-2 rounded-md  text-3xl text-red h-8 w-20 "
              >
                🔙
              </button>

              <input
            placeholder="Search Location"
            onChange={(event) => filterName(event)}
            className="text-field rounded w-[32em] h-10 border-none focus:outline-button-color bg-sky-blue"
          />
  
              <div className="section">
<section className='sidebar'>
  <h2 className='h-2'>Concern</h2>
  <div>
    <p className='paragraph'>This page shows the details about the land, landowners and its description. Collective agri-environmental schemes are designed to improve the spatial coordination and targeting of agri-environmental measures. For this, use of innovative technologies, improvement in input supply, improvement in infrastructure network, easy access to land and finance, and upgradation of farm operations are a must.  </p>
  </div>
</section>

                {details.map((formDetails, index) => (
                  <section key={index}>


                      <section className='inner-section'>
<div className='imagediv'>
<img
          className="image h-28 w-28"
          src={formDetails.landPicture}
          alt="image-preview"
        />
</div>

<div className='detailName'>
<h2>Details</h2>
  <b>Name of the owner:  {formDetails.name}</b>
  <b>Location:{formDetails.location} </b>
  <b>Area of the land: {formDetails.area}</b>
  <b>Climate:{formDetails.climateCondition} </b>
  <b>Suitable:{formDetails.suitableCrops} </b>
  <b>Transportation Facility:{formDetails.facilityOfLocation} </b>
  </div>
</section>
    </section>
                 
                ))}
                </div>
              

      
    </div>
  )
}

export default DetailPage