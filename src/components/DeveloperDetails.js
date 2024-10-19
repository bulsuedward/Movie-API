import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import "../css/developerdetails.css"; // Import the CSS file
import DeveloperImage from "../assets/edward.jpg";

const DeveloperDetails = () => {
  // Responsive layout
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      className="developer-container"
      sx={{
        mt: 4,
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        alignItems: isSmallScreen ? "center" : "flex-start",
        padding: isSmallScreen ? "16px" : "32px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        border: "1px solid #ccc",
      }}
    >
      <Box
        component="img"
        src={DeveloperImage}
        alt="Developer"
        className="developer-image"
        sx={{
          width: isSmallScreen ? "150px" : "300px",
          height: isSmallScreen ? "150px" : "300px",
          borderRadius: "50%",
          objectFit: "cover",
          mb: isSmallScreen ? 2 : 0,
        }}
      />
      <Box
        className="developer-details"
        sx={{
          padding: "16px",
          display: "grid",
          flex: 1,
          marginLeft: isSmallScreen ? 0 : "50px",
        }}
      >
        <Typography
          variant="h2"
          className="developer-name"
          gutterBottom
          sx={{
            fontSize: isSmallScreen ? "1.5rem" : "2rem",
          }}
        >
          Edward Joseph Santos
        </Typography>
        <Typography
          variant="h4"
          className="developer-role"
          gutterBottom
          sx={{
            fontSize: isSmallScreen ? "1.25rem" : "1.5rem",
          }}
        >
          Frontend Developer
        </Typography>
        <Typography
          className="developer-bio"
          component="p"
          sx={{
            textAlign: "justify",
            fontSize: isSmallScreen ? "0.9rem" : "1.1rem",
            lineHeight: isSmallScreen ? 1.4 : 1.6,
            mt: 1,
          }}
        >
          Edward is a passionate frontend developer with experience in building
          responsive web applications using React and Material-UI. He enjoys
          solving complex problems and is always eager to learn new
          technologies.
        </Typography>
      </Box>
    </Box>
  );
};

export default DeveloperDetails;
