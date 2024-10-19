import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import SearchBar from "../components/SearchBar"; // Adjust the path as necessary
import MovieDisplay from "../components/MovieDisplay"; // Adjust the path as necessary
import DeveloperDetails from "../components/DeveloperDetails";
import "../css/movieapp.css"; // Import the CSS file
const MovieApp = () => {
  const [searchParams, setSearchParams] = useState({
    title: "",
    year: "",
    plot: "",
  });

  const handleSearch = (params) => {
    setSearchParams(params); // Update search parameters
  };

  return (
    <>
      <Box
        component="div"
        sx={{
          padding: "0 20px", // 20px margin on left and right
          boxSizing: "border-box", // Ensure padding is within the element's width
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
