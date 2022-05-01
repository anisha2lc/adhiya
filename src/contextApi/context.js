import React, { createContext, useState } from "react";

export const InvoiceContext = createContext();

const InvoiceContextProvider = ({ children }) => {
	const [details, setDetails] = useState([]);
	const initialState = {
		landCertificate: "",
		name: "",
		location: "",
		contactInfo: "",
        climateCondition:"",
		area: "",
		landPicture: "",
		suitableCrops : "",
		facilityOfLocation: "",
	  };
	
	  const [data, setData] = useState([initialState]);

  return (
    <InvoiceContext.Provider value={{ data, setData, details, setDetails }}>
      {children}
    </InvoiceContext.Provider>
  );
};

export default InvoiceContextProvider;