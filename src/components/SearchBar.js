import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [year, setYear] = useState("");
  const [plot, setPlot] = useState("");

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSearch = () => {
    // This triggers the function passed from the parent (container) component
    onSearch({ title: searchTerm, year, plot });
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#D3D3D3",
        padding: "10px 20px",
        width: "100%",
        marginTop: "20px",
        borderRadius: "10px",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            minWidth: "100px",
            color: "#1b2631",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          Movies Search App
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            flexWrap: isSmallScreen ? "wrap" : "nowrap",
            marginLeft: "auto",
            width: "100%",
            maxWidth: "800px",
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Search..."
            size="medium"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
              flexGrow: 1,
              flexBasis: isSmallScreen ? "100%" : "300px",
              minWidth: "150px",
              maxWidth: "200px",
            }}
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
            sx={{
              flexGrow: 1,
              flexBasis: isSmallScreen ? "100%" : "150px",
              minWidth: "100px",
              maxWidth: "200px",
            }}
          />
          <FormControl
            variant="outlined"
            size="medium"
            sx={{
              flexGrow: 1,
              flexBasis: isSmallScreen ? "100%" : "150px",
              minWidth: "120px",
              maxWidth: "200px",
            }}
          >
            <InputLabel id="plot-select-label">Plot</InputLabel>
            <Select
              labelId="plot-select-label"
              value={plot}
              onChange={(e) => setPlot(e.target.value)}
              sx={{ width: "100%" }}
            >
              <MenuItem value="short">Short</MenuItem>
              <MenuItem value="full">Full</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            onClick={handleSearch}
            sx={{
              flexGrow: 1,
              flexBasis: isSmallScreen ? "100%" : "100px",
              minWidth: "80px",
              maxWidth: "150px",
              backgroundColor: "#36454F",
              "&:hover": {
                backgroundColor: "#2B3A43",
              },
            }}
          >
            Search
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default SearchBar;
