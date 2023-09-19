import { Box } from "@mui/material";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUserGraduate, FaSchool } from "react-icons/fa";
const EducationSection = () => {
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
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2017 - 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaUserGraduate />}>
          <h3 className="vertical-timeline-element-title">
            Bachelor of Technology In Computer Science
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            B.S.M College of Engineering
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2016 - 2017"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaSchool />}>
          <h3 className="vertical-timeline-element-title">Intermidate</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Sri Guru Teg Bahadur Se. Sec. Public School
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2014 - 2015"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaSchool />}>
          <h3 className="vertical-timeline-element-title">High School</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Kendriya Vidyalaya, Haldwani Cantt
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Box>
  );
};

export default EducationSection;
