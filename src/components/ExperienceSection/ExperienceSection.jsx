import React from "react";
import { Box, Typography } from "@mui/material";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import "./asset/css/experience.css";
const info = [
  "Developed dynamic image web applications, enabling users to generate customized images and text.",
  "Created and implemented an OpenAI chatbot, enhancing user engagement and interaction.",
  "Translated designs and wireframes into high-quality code using React.JS, Redux, HTML, CSS, and JavaScript.",
  "Stayed updated with the latest industry trends and emerging technologies in web development.",
  "Collaborated with cross-functional teams to define and implement innovative solutions",
];

const ExperienceSection = () => {
  return (
    <Box className="experienceSection">
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
          contentStyle={{ background: "rgb(19, 49, 64)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdWork />}>
          <Typography
            variant="h5"
            sx={{
              color: "#ececec",
              marginBottom: "1rem",
            }}>
            Associate Software Developer
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#ececec",
              marginBottom: "1rem",
              display: "flex",
              justifyContent: "space-between",
            }}>
            <span> Detroit Software Consultants India Private Limited</span>
            <span> 2022 - 2023</span>
          </Typography>

          <ul className="experienceList">
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
