import { Typography, Paper } from "@mui/material";
import React from "react";
import "./assets/css/project.css";

const SkillBox = ({ items }) => {
  return (
    <Paper elevation={3} className="skill_box">
      <img src={items.src} alt={items.title} className="skill_icon" />
      <Typography variant="h6" className="skill_text">
        {items.title}
      </Typography>
    </Paper>
  );
};

export default SkillBox;
