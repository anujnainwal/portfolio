import { Box } from "@mui/material";
import React from "react";
import ProjectCard from "./ProjectCartd";

const ProjectSection = () => {
  return (
    <Box
      sx={{
        height: "100%", // Adjusts the height to the full viewport height
        // Adjusts the width to the full viewport width
        backgroundColor: "#0e1b25de",
        display: "flex",
        maxHeight: "fit-content",
        padding: "15px 15px",
        flexWrap: "wrap",
      }}>
      <ProjectCard />
    </Box>
  );
};

export default ProjectSection;
