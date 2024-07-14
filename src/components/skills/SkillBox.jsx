import { Typography, Paper, Skeleton } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./assets/css/project.css";

const SkillBox = ({ items }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = items.src;
    img.onload = () => setLoading(false);
  }, [items.src]);

  return (
    <Paper elevation={3} className="skill_box">
      {loading ? (
        <Skeleton variant="rectangular" width={60} height={60} />
      ) : (
        <img src={items.src} alt={items.title} className="skill_icon" />
      )}
      <Typography variant="h6" className="skill_text">
        {items.title}
      </Typography>
    </Paper>
  );
};

export default SkillBox;
