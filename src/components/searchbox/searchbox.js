import React from "react";

import "./searchbox.css";

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="search react-font"
      type="search"
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default SearchBox;
