import React from "react";
import { Box, Container, Grid } from "@mui/material";
import "./assets/css/about.css";
const AboutSection = () => {
  return (
    <Box
      sx={{
        height: 565,
        background: "#050a0eea",
        display: "flex",
        alignContent: "center",
      }}>
      <Container maxWidth="xxl">
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} lg={6}>
            <Box
              color="#fff"
              sx={{
                padding: 1,
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
              }}>
              👋 Hello! I'm Anuj Singh Nainwal, an enthusiastic Associate
              Software Developer with a strong passion for crafting high-quality
              software solutions that make a positive impact.
              <br />
              <br />
              🚀 With 1.2 years of hands-on experience, I have been on a
              thrilling journey in the world of software development. My
              expertise lies in dynamic web application development, where I
              have honed my skills in React JS, Redux, HTML, CSS, and
              JavaScript. I take pride in my ability to translate design
              concepts and wireframes into seamless, user-friendly applications.
              <br />
              <br /> 🎓 I hold a Bachelor's degree in Computer Science, which
              has provided me with a strong foundation for solving complex
              problems and staying ahead of industry trends. I'm a firm believer
              in the importance of continuous learning and actively keep myself
              updated on the latest developments in the tech world.
              <br />
              <br />
              💡 What sets me apart is my collaborative spirit and innovative
              problem-solving approach. I thrive in team environments where
              diverse perspectives come together to create exceptional
              solutions.
              <br />
              <br />
              🏆 On the academic front, I've earned certificates in JavaScript
              Intermediate and JavaScript Basic from HackerRank, showcasing my
              dedication to mastering the tools of the trade. <br />
              <br />
              Let's connect and explore how my skills and passion for software
              development can contribute to exciting and impactful projects.
            </Box>
          </Grid>
          <Grid item sx={{ display: { xs: "none", lg: "block" } }} lg={6}>
            <div className="hover14 column">
              <figure style={{ width: 350, height: 400 }}>
                <img
                  src="https://staticg.sportskeeda.com/editor/2023/07/1e42b-16888837576290-1920.jpg"
                  alt="user"
                />
              </figure>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
