import React, { useState } from "react";
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
  useTheme,
  useMediaQuery,
} from "@mui/material";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [year, setYear] = useState("");
  const [plot, setPlot] = useState("");

  // Responsive theme breakpoints for adjusting on small screens
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSearch = () => {
    onSearch({ title: searchTerm, year, plot });
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#f2f4f4",
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
          Movies
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            flexWrap: isSmallScreen ? "wrap" : "nowrap", // Wrap elements on small screens
            marginLeft: "auto", // Push to the right
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
              flexBasis: isSmallScreen ? "100%" : "300px", // Full width on small screens
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
              flexBasis: isSmallScreen ? "100%" : "150px", // Full width on small screens
              minWidth: "100px",
              maxWidth: "200px",
            }}
          />
          <FormControl
            variant="outlined"
            size="medium"
            sx={{
              flexGrow: 1,
              flexBasis: isSmallScreen ? "100%" : "150px", // Full width on small screens
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
              flexBasis: isSmallScreen ? "100%" : "100px", // Full width on small screens
              minWidth: "80px",
              maxWidth: "150px",
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
