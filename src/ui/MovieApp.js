import React, { useState } from "react";
import { Box } from "@mui/material";
import SearchBar from "../components/SearchBar";
import MovieDisplay from "../components/MovieDisplay";
import DeveloperDetails from "../components/DeveloperDetails";
import "../css/movieapp.css"; 
const MovieApp = () => {
  const [searchParams, setSearchParams] = useState({
    title: "",
    year: "",
    plot: "",
  });

  const handleSearch = (params) => {
    setSearchParams(params);
  };

  return (
    <>
      <Box
        component="div"
        sx={{
          padding: "0 20px",
          boxSizing: "border-box",
        }}
      >
        <SearchBar onSearch={handleSearch} />
        <MovieDisplay searchParams={searchParams} />
        <DeveloperDetails />
      </Box>
    </>
  );
};

export default MovieApp;
