import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import axios from "axios";
import "../css/moviedisplay.css";
import NoMovies from "../assets/nomovies.svg";
import Director from "../assets/directoricon.svg";
import Genre from "../assets/genreicon.svg";
import Plot from "../assets/ploticon.svg";
import Date from "../assets/movieicon.svg";
import Runtime from "../assets/runtimeicon.svg";
import Rating from "../assets/ratingicon.svg";
import Actor from "../assets/actorsicon.svg";
import NotFound from "../assets/notfound.svg";
import FetchMovieData from "../hooks/FetchMovieData";

// Reusable field component for displaying movie details
const MovieDetailField = ({ iconSrc, label, value }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
    <img src={iconSrc} alt={`${label} Icon`} width={24} height={24} />
    <Typography variant="body2" sx={{ fontSize: "1.5rem" }}>
      {label}: {value}
    </Typography>
  </Box>
);

const MovieDisplay = ({ searchParams }) => {
  const { movieData, loading, error } = FetchMovieData(searchParams);

  if (loading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "400px",
        }}
      >
        <CircularProgress
          sx={{
            color: "#7fb3d5",
            width: "100px !important",
            height: "100px !important",
            boxShadow: "0px 0px 20px 5px rgba(93,109,126,0.6)",
            borderRadius: "50%",
          }}
          thickness={4}
        />
      </Box>
    );

  if (error)
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          height: "400px",
        }}
      >
        <img
          src={NotFound}
          alt="Movie Not Found"
          style={{
            maxWidth: "200px",
            height: "auto",
          }}
        />
        <Typography
          variant="h6"
          color="error"
          sx={{ marginTop: 2, fontSize: "1.5rem" }}
        >
          Movie Not Found
        </Typography>
      </Box>
    );

  const rottenTomatoesRating = movieData?.Ratings?.find(
    (rating) => rating.Source === "Rotten Tomatoes"
  )?.Value;

  return movieData ? (
    <Box
      sx={{ display: "flex", gap: 2 }}
      component="div"
      className="movie-container"
    >
      <img
        src={movieData.Poster}
        alt={movieData.Title}
        style={{
          marginLeft: "300px",
          border: "5px solid #B2BEB5",
          borderRadius: "10px",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
        }}
      />
      <Box sx={{ alignItems: "center", marginLeft: "200px" }}>
        <Typography variant="h5" sx={{ fontSize: "2.25rem" }}>
          {movieData.Title}
        </Typography>

        <MovieDetailField
          iconSrc={Date}
          label="Released"
          value={movieData.Released}
        />
        <MovieDetailField iconSrc={Plot} label="Plot" value={movieData.Plot} />
        <MovieDetailField
          iconSrc={Runtime}
          label="Runtime"
          value={movieData.Runtime}
        />
        <MovieDetailField
          iconSrc={Genre}
          label="Genre"
          value={movieData.Genre}
        />
        <MovieDetailField
          iconSrc={Actor}
          label="Actors"
          value={movieData.Actors}
        />
        <MovieDetailField
          iconSrc={Director}
          label="Director"
          value={movieData.Director}
        />

        {rottenTomatoesRating && (
          <MovieDetailField
            iconSrc={Rating}
            label="Rotten Tomatoes"
            value={rottenTomatoesRating}
          />
        )}
      </Box>
    </Box>
  ) : (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "400px",
        padding: 2,
      }}
    >
      <img
        src={NoMovies}
        alt="No Movies to Display"
        style={{
          maxWidth: "100%",
          width: "200px",
          height: "auto",
        }}
      />
      <Typography
        variant="h6"
        color="textSecondary"
        sx={{
          marginTop: 2,
          fontSize: {
            xs: "1rem",
            sm: "1.25rem",
            md: "1.5rem",
          },
        }}
      >
        No Movies to Display
      </Typography>
    </Box>
  );
};

export default MovieDisplay;
