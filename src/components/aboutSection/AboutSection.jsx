import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import "./assets/css/about.css";
import AboutImage from "./assets/image/photo.jpg";

const AboutSection = () => {
  return (
    <Box component="div" className="aboutSection">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              component="h1"
              sx={{
                color: "#546de5",
                marginBottom: 2,
              }}>
              👋 Hello! I'm Anuj Singh Nainwal
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#c8d6e5",
                lineHeight: 1.6,
                fontSize: 18,
              }}>
              With 1.2 years of hands-on experience, I have been on a thrilling
              journey in the world of software development. My expertise lies in
              dynamic web application development, where I have honed my skills
              in React JS, Redux, HTML, CSS, and JavaScript. I take pride in my
              ability to translate design concepts and wireframes into seamless,
              user-friendly applications.
              <br />
              <br />
              I hold a Bachelor's degree in Computer Science, which has provided
              me with a strong foundation for solving complex problems and
              staying ahead of industry trends. I'm a firm believer in the
              importance of continuous learning and actively keep myself updated
              on the latest developments in the tech world.
              <br />
              <br />
              What sets me apart is my collaborative spirit and innovative
              problem-solving approach. I thrive in team environments where
              diverse perspectives come together to create exceptional
              solutions.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="hover14 column">
              <img
                src={AboutImage}
                alt="user"
                style={{
                  objectFit: "cover",

                  height: "50%",
                  borderRadius: "8px",
                }}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
