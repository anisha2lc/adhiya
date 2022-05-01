// import React, { useContext, useEffect } from "react";

// import { useNavigate, useParams } from "react-router-dom";

// import { InvoiceContext } from '../contextApi/context';
// import Search from "./Search";

// const FinalPage = () => {
//   const key = "data";

//   const { contact } = useParams();

//   let navigate = useNavigate();

//   const { details, setDetails } = useContext(InvoiceContext);

//   const Redirect = () => {
//     navigate("/detail-page");
//   };

//   const data = details.filter((location, index) => {
//     return contact == details[index].contactInfo;
//   });



//   useEffect(() => {
//     if (!details.length) return;
//     localStorage.setItem(key, JSON.stringify(details));
//   }, [details]);

//   function init() {
//     const value = localStorage.getItem(key);

//     if (value) {
//       setDetails(JSON.parse(value));
//     }
//   }
//   useEffect(() => init(), []);


//   return (
//     <>
     
//             <div className=" flex flex-row justify-around items-center">
//               <button
//                 onClick={Redirect}
//                 className="go-back-button m-2 rounded-md  text-3xl text-red h-8 w-20 "
//               >
//                 🔙
//               </button>
            
//               <input
//             placeholder="Search Country Name "
//             // onChange={(event) => filterName(event)}
//             className="text-field rounded w-[32em] h-10 border-none focus:outline-button-color bg-sky-blue"
//           />


//               <p>Here are the details od the land.</p>

//             <div className=" default-pdf">
//               <header className="page-title m-4 p-4">
//                 <h1 className="invoice-details">Invoice Details:</h1>
//               </header>

//               <div className="invoice-data columns-2 m-4 p-4 mobile-phone:columns-1 larger-desktops:columns-2">
//                 {details.map((data, index) => (
//                   <section key={index}>
//                   <p>Name of Owner: {data.name}</p>
//                   <p>Climate Condition: {data.climate}</p>
//                   <p>Contact Information: {data.contactInfo}</p>
//                   <p>Location: {data.location}</p>
//                   <p>Transportation: {data.facilityOfLocation}</p>
//                   <p>Area: {data.area}</p>
//                   <p>Suitable Crops: {data.suitableCrops}</p>
//                   <p>Name of Owner: {data.name}</p>
//                   </section>


//                 // <section key={index}>
//                 // <p>Name of Owner: {data.name}</p>
//                 // <p>Climate Condition: {data.climate}</p>
//                 // <p>Contact Information: {data.contactInfo}</p>
//                 // <p>Location: {data.location}</p>
//                 // <p>Transportation: {data.facilityOfLocation}</p>
//                 // <p>Area: {data.area}</p>
//                 // <p>Suitable Crops: {data.suitableCrops}</p>
//                 // <p>Name of Owner: {data.name}</p>
//                 // </section>



//                 ))}
//               </div>
//             </div>
// </div>
//     </>
//   );
// };

// export default FinalPage;
