import { Box, Skeleton, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ToolHubImage from "./assets/images/toolhubLanding.png";
import socialMedia from "./assets/images/toolhub/socialMedia.png";
import Calculator from "./assets/images/toolhub/Calculator.png";
import codeFormatter from "./assets/images/toolhub/codeFormatter.png";
import ImageOperation from "./assets/images/toolhub/ImageOperation.png";

const ProjectSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const projectData = [
    {
      imageUrl: ToolHubImage,
      title: "Toolhub",
      description:
        "Toolhub is a comprehensive platform that offers users access to multiple services, including the ability to download videos from social media platforms like YouTube, Facebook, and Instagram. ",
      liveLink: "http://16.170.172.207/home",
      images: [
        ToolHubImage,
        socialMedia,
        Calculator,
        codeFormatter,
        ImageOperation,
      ],
    },
    // Add more projects here if needed
  ];

  return (
    <Box className="projectSection" sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {loading
          ? [...Array(4)].map((_, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Skeleton
                  variant="rectangular"
                  height={300}
                  sx={{ borderRadius: 2, marginBottom: 2 }}
                />
                <Skeleton variant="text" height={30} sx={{ marginBottom: 1 }} />
                <Skeleton variant="text" height={20} />
              </Grid>
            ))
          : projectData.map((project, index) => (
              // <Grid item xs={12} sm={6} md={4} key={index}>
              <ProjectCard
                imageUrl={project.imageUrl}
                title={project.title}
                description={project.description}
                liveLink={project.liveLink}
                images={project.images}
              />
              // </Grid>
            ))}
      </Grid>
    </Box>
  );
};

export default ProjectSection;
