import React from "react";
import { Card, CardContent, Typography, Link } from "@mui/material";
import "./assets/project.css";
const ProjectCard = ({
  title,
  description,
  imageUrl,
  demoLink,
  liveLink,
  githubLink,
}) => {
  return (
    <>
      <Card className={`card`} sx={{ margin: "10px 20px" }}>
        <CardContent className="cardContent">
          <img
            src={
              "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg"
            }
            alt={title}
          />
          <Typography variant="h5" gutterBottom>
            {/* {title} */} Ecomerce
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {/* {description} */} Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries
          </Typography>
        </CardContent>
        <CardContent className={`cardContent footer`}>
          <Typography variant="body2">
            <Link
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              color="inherit">
              Demo
            </Link>
            |
            <Link
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              color="inherit">
              Live
            </Link>
            <Link
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              color="inherit">
              GitHub
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default ProjectCard;
