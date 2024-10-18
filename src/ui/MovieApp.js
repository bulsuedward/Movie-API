import React, { useState } from "react";
import { Container } from "@mui/material";
import SearchBar from "../components/SearchBar"; // Adjust the path as necessary
import MovieDisplay from "../components/MovieDisplay"; // Adjust the path as necessary
import DeveloperDetails from "../components/DeveloperDetails";
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
      <Container>
        <SearchBar onSearch={handleSearch} />
        <MovieDisplay searchParams={searchParams} />
      </Container>
      <DeveloperDetails />
    </>
  );
};

export default MovieApp;
