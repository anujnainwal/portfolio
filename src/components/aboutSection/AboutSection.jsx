import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import "./assets/css/about.css";
import AboutImage from "./assets/image/photo.jpg";
import { styled } from "@mui/system";
import Fade from "react-reveal/Fade";

const HoverImage = styled("img")({
  objectFit: "cover",
  height: "100%",
  borderRadius: "8px",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const AboutSection = () => {
  return (
    <Box
      component="div"
      className="aboutSection"
      sx={{ height: "100vh", py: 8, backgroundColor: "#1A1E22" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Fade bottom>
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  color: "#546de5",
                  marginBottom: 2,
                  fontWeight: 700,
                }}
              >
                👋 Hello! I'm Anuj Singh Nainwal
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#576574",
                  lineHeight: 1.8,
                  fontSize: 18,
                }}
              >
                With 1.2 years of hands-on experience, I have been on a
                thrilling journey in the world of software development. My
                expertise lies in dynamic web application development, where I
                have honed my skills in React JS, Redux, HTML, CSS, and
                JavaScript. I take pride in my ability to translate design
                concepts and wireframes into seamless, user-friendly
                applications.
                <br />
                <br />
                I hold a Bachelor's degree in Computer Science, which has
                provided me with a strong foundation for solving complex
                problems and staying ahead of industry trends. I'm a firm
                believer in the importance of continuous learning and actively
                keep myself updated on the latest developments in the tech
                world.
                <br />
                <br />
                What sets me apart is my collaborative spirit and innovative
                problem-solving approach. I thrive in team environments where
                diverse perspectives come together to create exceptional
                solutions.
              </Typography>
            </Fade>
          </Grid>
          <Grid item xs={12} md={6}>
            <Fade bottom delay={200}>
              <div className="hover14 column">
                <HoverImage src={AboutImage} alt="user" />
              </div>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
