import React, { useContext, useEffect } from "react";
import { ProductContext } from "contextAPI/ProductContext";

const Search = ({ currencyDataName, searchCurrencyValue }) => {
  const { setModalStatus, setCurrency, currency } = useContext(ProductContext);

  const key = "currencyName";

  const nameOfCurrency = (currencyCode) => {
    setCurrency(currencyCode);
    setModalStatus(false);
  };

  useEffect(() => {
    if (!currency) return;
    localStorage.setItem(key, JSON.stringify(currency));
  }, [currency]);

  function init() {
    const value = localStorage.getItem(key);

    if (value) {
      setCurrency(JSON.parse(value));
    }
  }
  useEffect(() => init(), []);

  const noSearchValue = searchCurrencyValue != "";

  return (
    <div className=" p-10 pt-2">
      <div className=" pt-4 pl-6 h-[21em] overflow-auto">
        {noSearchValue ? (
          <div>
            {searchCurrencyValue.map((value, index) => (
              <div
                key={index}
                className="flex flex-row justify-between items-center hover:bg-hover-color"
                onClick={() => nameOfCurrency(value.currencyCode)}
              >
                <button>
                  {value.country}-{value.currencyCode}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div>
            {currencyDataName.map((curr, index) => (
              <div
                key={index}
                className=" flex flex-row justify-between hover:bg-hover-color text-ebony-clay mobile-phone:text-xs tablet:text-base"
                onClick={() => nameOfCurrency(curr.currencyCode)}
              >
                <button>
                  {curr.country}-{curr.currencyCode}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
