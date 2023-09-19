import React from "react";
import { Box } from "@mui/material";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
const info = [
  "   Developed dynamic image web applications, enabling users to generate customized images and text.",
  " Created and implemented an OpenAI chatbot, enhancing userengagement and interaction. ",
  " Translated designs and wireframes into high-quality code using React.JS, Redux, HTML, CSS, and JavaScript. ",
  "Stayed updated with the latest industry trends and emerging technologies in web development. ",
  " Collaborated with cross-functional teams to define and implement innovative solutions",
];
const ExperienceSection = () => {
  return (
    <Box
      sx={{
        height: "90vh",
        background: "#050a0eea",
        display: "flex",
        alignContent: "center",
      }}>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(119, 139, 235)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2022 - 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdWork />}>
          <h3 className="vertical-timeline-element-title">
            Associate Software Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Detroit Software Consultants India Private Limited
          </h4>
          <br />
          <ul>
            {info.map((items, index) => {
              return (
                <li key={index} className="experienceInfo">
                  {items}
                </li>
              );
            })}
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Box>
  );
};

export default ExperienceSection;
