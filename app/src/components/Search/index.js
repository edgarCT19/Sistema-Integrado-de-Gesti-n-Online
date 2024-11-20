import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);  // Llamamos la función onSearch que se pasará como prop desde el componente principal
  };

  return (
    <div className="searchBox position-relative d-flex align-items-center">
      <IoSearch />
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search here..."
      />
    </div>
  );
};

export default Search;
