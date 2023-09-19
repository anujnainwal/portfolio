import { Box, Typography } from "@mui/material";
import React from "react";

const SkillSection = () => {
  return (
    <Box
      sx={{
        height: "90vh",
        background: "#050a0eea",
        display: "flex",
        alignContent: "center",
      }}>
      <Box sx={{ margin: "10px 0", width: "100%" }}>
        <Typography
          component="div"
          color="#fff"
          sx={{ textAlign: "center !important" }}>
          I have skilled in
        </Typography>
      </Box>
    </Box>
  );
};

export default SkillSection;
