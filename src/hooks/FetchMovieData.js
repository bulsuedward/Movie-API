import { useEffect, useState } from "react";
import axios from "axios";

const FetchMovieData = (searchParams) => {
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      if (!searchParams.title) return;

      setLoading(true);
      setError(null);

      try {
        const { data } = await axios.get("http://www.omdbapi.com/", {
          params: {
            t: searchParams.title,
            y: searchParams.year,
            plot: searchParams.plot,
            apiKey: "788848fd",
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

  return { movieData, loading, error };
};

export default FetchMovieData;
