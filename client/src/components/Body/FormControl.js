import React from "react";
import Select from "./Select";
import Search from "./Search";

import "./FormControl.css";
const FormControl = () => {
  return (
    <>
      <div className="formControl">
        <Search />
        <Select />
      </div>
    </>
  );
};

export default FormControl;
