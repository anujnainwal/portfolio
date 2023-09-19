import React from "react";
import { Box, Typography } from "@mui/material";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";

const info = [
  "Developed dynamic image web applications, enabling users to generate customized images and text.",
  "Created and implemented an OpenAI chatbot, enhancing user engagement and interaction.",
  "Translated designs and wireframes into high-quality code using React.JS, Redux, HTML, CSS, and JavaScript.",
  "Stayed updated with the latest industry trends and emerging technologies in web development.",
  "Collaborated with cross-functional teams to define and implement innovative solutions",
];

const ExperienceSection = () => {
  return (
    <Box
      sx={{
        background: "#050a0eea",
        padding: "2rem 0",
        height: "90vh",
        textAlign: "center",
      }}>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          color: "#fff",
          marginBottom: "2rem",
        }}>
        My Experience
      </Typography>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(119, 139, 235)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2022 - 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdWork />}>
          <Typography
            variant="h5"
            sx={{
              color: "#fff",
              marginBottom: "0.5rem",
            }}>
            Associate Software Developer
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#fff",
              marginBottom: "1rem",
            }}>
            Detroit Software Consultants India Private Limited
          </Typography>
          <ul>
            {info.map((item, index) => (
              <li key={index} className="experienceInfo">
                {item}
              </li>
            ))}
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Box>
  );
};

export default ExperienceSection;
