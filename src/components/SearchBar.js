import React, { useState } from "react";
import "../css/searchbar.css";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Button,
} from "@mui/material";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [year, setYear] = useState("");
  const [plot, setPlot] = useState("");

  const handleSearch = () => {
    onSearch({ title: searchTerm, year, plot });
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Movies
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <TextField
            variant="outlined"
            placeholder="Search..."
            size="medium"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ minWidth: 150, flex: 1 }} // Set flex property for equal size
          />
          <TextField
            variant="outlined"
            type="number"
            placeholder="Year"
            size="medium"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            inputProps={{
              min: 1900,
              max: new Date().getFullYear(),
            }}
            sx={{ minWidth: 150, flex: 1 }} // Set flex property for equal size
          />
          <FormControl
            variant="outlined"
            size="medium"
            sx={{ minWidth: 150, flex: 1 }}
          >
            <InputLabel id="plot-select-label">Plot</InputLabel>
            <Select
              labelId="plot-select-label"
              value={plot}
              onChange={(e) => setPlot(e.target.value)}
              sx={{ width: "100%" }} // Ensure the Select takes full width
            >
              <MenuItem value="short">Short</MenuItem>
              <MenuItem value="full">Full</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" onClick={handleSearch} sx={{ flex: 1 }}>
            Search
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default SearchBar;
