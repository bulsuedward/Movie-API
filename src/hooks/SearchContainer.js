import React, { useState } from "react";
import SearchBar from "../components/SearchBar";

const SearchContainer = () => {
  const [searchParams, setSearchParams] = useState({
    title: "",
    year: "",
    plot: "",
  });

  const handleSearch = (params) => {
    setSearchParams(params);
  };

  return <SearchBar onSearch={handleSearch} />;
};

export default SearchContainer;
