import { Box } from "@mui/material";
import React from "react";
import SkillBox from "./SkillBox";
import { SkillSet } from "./Dataset";

const SkillSection = () => {
  return (
    <Box
      sx={{
        height: "90vh",

        background: "#050a0eea",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: 2,
      }}>
      {SkillSet.length > 0 &&
        SkillSet.map((items, index) => {
          return <SkillBox items={items} />;
        })}
    </Box>
  );
};

export default SkillSection;
