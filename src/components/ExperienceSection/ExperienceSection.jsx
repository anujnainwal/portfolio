import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork, MdFiberManualRecord } from "react-icons/md";
import "./asset/css/experience.css";

const experiences = [
  {
    position: "Associate Software Developer",
    company: "Detroit Software Consultants Ind Pvt Ltd",
    duration: " June 2022 - Aug 2023",
    details: [
      "Developed dynamic image web applications, enabling users to generate customized images and text.",
      "Created and implemented an OpenAI chatbot, enhancing user engagement and interaction.",
      "Translated designs and wireframes into high-quality code using React.JS, Redux, HTML, CSS, and JavaScript.",
      "Stayed updated with the latest industry trends and emerging technologies in web development.",
      "Collaborated with cross-functional teams to define and implement innovative solutions",
    ],
  },
  {
    position: "Backend Developer",
    company: "Rapidsofts",
    duration: "2024 - Present",
    details: [
      "Led a team of developers to create scalable web applications.",
      "Optimized application performance, reducing load times by 30%.",
      "Integrated third-party APIs to enhance application functionality.",
      "Implemented responsive design principles to improve user experience.",
      "Conducted code reviews and provided mentorship to junior developers.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <Box
      className="experienceSection"
      sx={{
        backgroundColor: "#0a1929",
        padding: "4rem 2rem",
        borderRadius: "8px",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          color: "#ececec",
          marginBottom: "2rem",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        My Experience
      </Typography>
      <VerticalTimeline>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#112240",
              color: "#fff",
              borderRadius: "8px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #64ffda" }}
            iconStyle={{ background: "#64ffda", color: "#0a1929" }}
            icon={<MdWork />}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#64ffda",
                marginBottom: "1rem",
                fontWeight: "bold",
              }}
            >
              {exp.position}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#8892b0",
                marginBottom: "1rem",
                display: "flex",
                justifyContent: "space-between",
                fontSize: "0.875rem",
              }}
            >
              <span>{exp.company}</span>
              <span>{exp.duration}</span>
            </Typography>

            <List sx={{ padding: 0 }}>
              {exp.details.map((item, index) => (
                <ListItem
                  key={index}
                  sx={{ padding: "0.5rem 0", color: "#ccd6f6" }}
                >
                  <ListItemIcon sx={{ minWidth: "auto", color: "#64ffda" }}>
                    <MdFiberManualRecord
                      size={10}
                      style={{ margin: "-5px 10px 0 0" }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Box>
  );
};

export default ExperienceSection;
