import React from "react";
import { Box, Typography, Container } from "@mui/material";
import "../css/developerdetails.css"; // Import the CSS file

const DeveloperDetails = () => {
  return (
    <Container className="developer-container">
      <Box
        component="img"
        src="https://preview.redd.it/itachi-made-the-correct-choice-the-uchiha-trolly-problem-v0-zpf7h9anjtud1.png?width=1399&format=png&auto=webp&s=a2dc4a11df1d7f6f174d668e02224c2d5e3a36bb" // Replace with the developer's image URL
        alt="Developer"
        className="developer-image"
      />
      <Box className="developer-details">
        <Typography variant="h6" className="developer-name">
          Uchiha Itachi
        </Typography>{" "}
        {/* Developer's name */}
        <Typography className="developer-role">
          Frontend Developer for Akatsuki
        </Typography>{" "}
        {/* Developer's role */}
        <Typography className="developer-bio" component="p">
          Itachi is a passionate frontend developer with experience in building
          responsive web applications using React and Material-UI. He enjoys
          solving complex problems and is always eager to learn new
          technologies.
        </Typography>{" "}
        {/* Developer's bio */}
      </Box>
    </Container>
  );
};

export default DeveloperDetails;
