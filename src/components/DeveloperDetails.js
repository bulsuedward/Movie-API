import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import "../css/developerdetails.css"; 
import DeveloperImage from "../assets/edward.jpg";
import LinkedInIcon from "../assets/linkedin.svg"; 
import FacebookIcon from "../assets/facebook.svg"; 
import GitHubIcon from "../assets/github.svg"; 

const DeveloperDetails = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    // DeveloperDetails Information
    <Box
      className="developer-container"
      sx={{
        mt: 4,
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        alignItems: "center",
        justifyContent: "center",
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
          width: isSmallScreen ? "100px" : "300px",
          height: isSmallScreen ? "100px" : "300px",
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
          textAlign: "center",
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
          I'm a graduate of Bulacan State University with a degree in BSIT,
          Specializing in Web and Mobile application Development. My passion
          lies in playing online games, particularly League of Legends, and I
          also have a keen interest in street and portrait photography. I’m
          always eager to learn new things and continually push myself to grow.
          I like to describe myself as someone who tries hard—in a good
          way—always striving to improve and expand my skills.
        </Typography>

        {/* Social Media Icons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mt: 2,
          }}
        >
          <a
            href="https://www.linkedin.com/in/edward-joseph-santos-192a6b299/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedInIcon} alt="LinkedIn" width={30} height={30} />
          </a>
          <a
            href="https://www.facebook.com/edwardsantos02"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={FacebookIcon} alt="Facebook" width={30} height={30} />
          </a>
          <a
            href="https://github.com/bulsuedward"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GitHubIcon} alt="GitHub" width={30} height={30} />
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default DeveloperDetails;
