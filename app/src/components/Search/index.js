import React from "react";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <>
      <div className="searchBox position-relative d-flex align-items-center">
        <IoSearch />
        <input type="text" placeholder="Search here..." />
      </div>
    </>
  );
};

export default Search;
