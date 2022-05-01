import React, { useContext } from "react";

import InvoiceContextProvider from "./context";

const Context = ({ children }) => {
  return (
    <InvoiceContextProvider>
      {children}
    </InvoiceContextProvider>
  );
};

export default Context;
