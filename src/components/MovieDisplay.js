import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import axios from "axios";
import "../css/moviedisplay.css"; // Import the CSS file

const MovieDisplay = ({ searchParams }) => {
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      if (!searchParams.title) return; // Exit if no title provided

      setLoading(true);
      setError(null); // Reset error before fetching

      try {
        const { data } = await axios.get("http://www.omdbapi.com/", {
          params: {
            t: searchParams.title,
            y: searchParams.year,
            plot: searchParams.plot, // This might be optional
            apiKey: "788848fd", // Replace with your actual API key
          },
        });

        if (data.Response === "False") throw new Error(data.Error);

        setMovieData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [searchParams]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return movieData ? (
    <Box
      sx={{ display: "flex", gap: 2 }}
      component="div"
      className="movie-container"
    >
      <img
        src={movieData.Poster}
        alt={movieData.Title}
        style={{ width: "200px" }}
      />
      <Box>
        <Typography variant="h5">{movieData.Title}</Typography>
        <Typography variant="subtitle1">{movieData.Released}</Typography>
        <Typography variant="body1">{movieData.Plot}</Typography>
      </Box>
    </Box>
  ) : null;
};

export default MovieDisplay;
