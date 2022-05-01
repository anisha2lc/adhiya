import React, {useState, useContext} from 'react'
import { useNavigate} from "react-router-dom";

import { InvoiceContext } from '../contextApi/context';

import "../css/fillform.css"

const FillForm = () => {
	const { data, setData, details, setDetails } = useContext(InvoiceContext);


    let navigate = useNavigate();

    const Redirect = () => {
        navigate("/");
      };


	  const  landCerti= (event) => {
		setData((prev) => {
		  const newData = { ...prev };
	
		  newData.landCertificate = event.target.value;
	
		  return newData;
		});
	  };

	  const  ownerName= (event) => {
		setData((prev) => {
		  const newData = { ...prev };
	
		  newData.name = event.target.value;
	
		  return newData;
		});
	  };

	  const  contact= (event) => {
		setData((prev) => {
		  const newData = { ...prev };
	
		  newData.location = event.target.value;
	
		  return newData;
		});
	  };


	  const  location= (event) => {
		setData((prev) => {
		  const newData = { ...prev };
	
		  newData.contactInfo = event.target.value;
	
		  return newData;
		});
	  };


	  const  description= (event) => {
		setData((prev) => {
		  const newData = { ...prev };
	
		  newData.description = event.target.value;
	
		  return newData;
		});
	  };


	  const  landArea= (event) => {
		setData((prev) => {
		  const newData = { ...prev };
	
		  newData.area = event.target.value;
	
		  return newData;
		});
	  };



	  const  landImg= (event) => {
		var reader = new FileReader();
		reader.onload=function(){
			setData({...data,landPicture:reader.result})
		}
		reader.readAsDataURL(event.target.files[0])
		
	  };

console.log(data)

const saveData = (event) => {
	event.preventDefault(event);

	setDetails((prev) => {

  
		return [...prev, data];
	  });

}

console.log("details", data.landCertificate);

const climate = (event) => {
	setData((prev) => {
		const newData = { ...prev };
  
		newData.climateCondition = event.target.value;
  
		return newData;
})
}


const crops = (event) => {
	setData((prev) => {
		const newData = { ...prev };
  
		newData.suitableCrops = event.target.value;
  
		return newData;
})
}

const transportation = (event) => {
	setData((prev) => {
		const newData = { ...prev };
  
		newData.facilityOfLocation = event.target.value;
  
		return newData;
})
}



  return (
 

    <div className='main-div'>


<div className='form'>

<button
                onClick={Redirect}
                className="go-back-button m-2 rounded-md  text-3xl text-red h-8 w-20 "
              >
                🔙
              </button>
<div className='form-main'>
<h1 className="b1">Registration Form</h1>
<div>

<label>Land OwnerShip certificate:</label>

{!data.landCertificate ? <input type="file" name="Image" onChange={(event) => landCerti(event)} className=' logo'/> : <img alt="" className='image' src={data[0].landCertificate}/> }


</div>

<div>
<label>Full name : </label>
<input type="text" name="Name" onChange={(event) => ownerName(event)} className='form-control'/>
</div>


<div>
<label>Contact Info:</label>
<input type="number" name="contact" onChange={(event) => contact(event)} className='form-control'/>
</div>


<div>
<label>Location :</label>
<input type="text" name="location" onChange={(event) => location(event)} className='form-control'/>
</div>

<div>
<label>Area of land:</label>
<input type="text" name="location" onChange={(event) => landArea(event)} className='form-control'/>
</div>

<div>
<label>Climate Condition:</label>
<input type="text" onChange={(event) => climate(event)} className='form-control'/>
</div>


<div>
<label>Facility of Transportation:</label>
			<input type="text" multiple onChange={(event) => transportation(event)} className='form-control'/>
</div>

<div>
<label>Suitable Crops:</label>
			<input type="text" multiple onChange={(event) => crops(event)} className='form-control'/>
</div>

<div>
<label>Pictures of Land:</label>
<input type="file" name="Image" onChange={(event) => landImg(event)} className=' logo' multiple/>
</div>

  <button 
  onClick={(event) => saveData(event)}

className="button"
  >
	  Save</button>
	  </div>
	  </div>
    </div>
  )
}

export default FillForm;