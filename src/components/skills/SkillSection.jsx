import { Box } from "@mui/material";
import React from "react";
import SkillBox from "./SkillBox";
import { SkillSet } from "./Dataset";

const SkillSection = () => {
  return (
    <Box className="skillSection">
      {SkillSet.length > 0 &&
        SkillSet.map((items, index) => {
          return <SkillBox items={items} />;
        })}
    </Box>
  );
};

export default SkillSection;
