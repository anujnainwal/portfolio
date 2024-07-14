import { Box, Typography, createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUserGraduate, FaSchool } from "react-icons/fa";
import "./assets/css/educations.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

const EducationSection = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box className="educationSection">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: theme.palette.primary.main,
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${theme.palette.primary.main}`,
            }}
            date="2017 - 2021"
            iconStyle={{
              background: theme.palette.primary.main,
              color: "#fff",
            }}
            icon={<FaUserGraduate />}
          >
            <Typography
              variant="h6"
              className="vertical-timeline-element-title"
            >
              Bachelor of Technology In Computer Science
            </Typography>
            <Typography
              variant="subtitle1"
              className="vertical-timeline-element-subtitle"
            >
              B.S.M College of Engineering
            </Typography>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: theme.palette.primary.main,
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${theme.palette.primary.main}`,
            }}
            date="2016 - 2017"
            iconStyle={{
              background: theme.palette.primary.main,
              color: "#fff",
            }}
            icon={<FaSchool />}
          >
            <Typography
              variant="h6"
              className="vertical-timeline-element-title"
            >
              Intermediate
            </Typography>
            <Typography
              variant="subtitle1"
              className="vertical-timeline-element-subtitle"
            >
              Sri Guru Teg Bahadur Se. Sec. Public School
            </Typography>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: theme.palette.primary.main,
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${theme.palette.primary.main}`,
            }}
            date="2014 - 2015"
            iconStyle={{
              background: theme.palette.primary.main,
              color: "#fff",
            }}
            icon={<FaSchool />}
          >
            <Typography
              variant="h6"
              className="vertical-timeline-element-title"
            >
              High School
            </Typography>
            <Typography
              variant="subtitle1"
              className="vertical-timeline-element-subtitle"
            >
              Kendriya Vidyalaya, Haldwani Cantt
            </Typography>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Box>
    </ThemeProvider>
  );
};

export default EducationSection;
