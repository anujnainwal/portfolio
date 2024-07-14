import React from "react";
import { Card, CardContent, Typography, Link, Grid, Box } from "@mui/material";
import "./assets/project.css";
import ImageSlider from "../ImageSlider/ImageSlider";

const ProjectCard = ({
  title,
  description,
  imageUrl,
  demoLink,
  liveLink,
  images,
  githubLink,
}) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        className={`card`}
        sx={{ margin: "10px 20px", transition: "transform 0.2s" }}
      >
        <CardContent sx={{ padding: "16px" }}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="100%"
          >
            <img src={imageUrl} alt={title} />
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              {title}
            </Typography>

            <Typography variant="body2" color="textSecondary">
              {description}
            </Typography>
          </Box>
        </CardContent>
        <CardContent className={`cardContent footer`} sx={{ padding: "16px" }}>
          <Typography variant="body2">
            <div style={{ display: "flex", alignItems: "center" }}>
              <ImageSlider images={images} />
              <Link
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="imageButton"
                color="inherit"
              >
                Live
              </Link>
              <Link
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="imageButton"
                color="inherit"
              >
                GitHub
              </Link>
            </div>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProjectCard;
