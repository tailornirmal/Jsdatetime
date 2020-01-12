import React, { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import axios from "axios";

const renderList = list => {
  if (list) {
    const result = Object.keys(list).map(key => {
      console.log(list[key]);
      return (
        <DropdownItem>
          <small>{`Country : ${key} and Rate is : ${list[key]}`}</small>
        </DropdownItem>
      );
    });
    return result;
  }
};

export default function Select() {
  const [dropdownOpen, setDropDownOpen] = useState(false);
  const [currencyConversionDetails, setCurrencyConversionDetails] = useState(
    {}
  );

  useEffect(() => {
    const getCurrencyConversion = async () => {
      const { data } = await axios(
        `https://api.exchangeratesapi.io/latest?base=USD`
      );
      if (data && data.rates) {
        setCurrencyConversionDetails(data.rates);
      } else {
        setCurrencyConversionDetails({});
      }
    };

    // Invoke the async function
    getCurrencyConversion();
  }, []); // Don't forget the `[]`, which will prevent useEffect from running in an infinite loop

  const toggle = () => setDropDownOpen(prevState => !prevState);

  return (
    <React.Fragment>
      <div>
        <small>Base currency is USD</small>
      </div>
      <hr />
      <Dropdown isOpen={dropdownOpen} toggle={toggle} size="sm">
        <DropdownToggle caret>Display Currency Conversion</DropdownToggle>
        <DropdownMenu
          modifiers={{
            setMaxHeight: {
              enabled: true,
              order: 890,
              fn: data => {
                return {
                  ...data,
                  styles: {
                    ...data.styles,
                    overflow: "auto",
                    maxHeight: 500
                  }
                };
              }
            }
          }}
        >
          {renderList(currencyConversionDetails)}
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
}
