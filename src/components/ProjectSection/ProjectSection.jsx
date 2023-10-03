import { Box } from "@mui/material";
import React from "react";
import ProjectCard from "./ProjectCartd";
import ToolHubImage from "./assets/images/toolhubLanding.png";
import socialMedia from "./assets/images/toolhub/socialMedia.png";
import Calculator from "./assets/images/toolhub/Calculator.png";
import codeFormatter from "./assets/images/toolhub/codeFormatter.png";
import ImageOperation from "./assets/images/toolhub/ImageOperation.png";
const ProjectSection = () => {
  return (
    <Box className="projectSection">
      <ProjectCard
        imageUrl={ToolHubImage}
        title="Toolhub"
        description="Toolhub is a comprehensive platform that offers users access to multiple services, including the ability to download videos from social media platforms like YouTube, Facebook, and Instagram. It also features a code formatter and various converters, with plans to add even more services in the future. This project was developed using a stack that includes React.js, Redux, Node.js, and ytdl-core."
        liveLink="http://16.170.172.207/home"
        // githubLink="https://github.com/anujnainwal/toolhub"
        images={[
          ToolHubImage,
          socialMedia,
          Calculator,
          codeFormatter,
          ImageOperation,
        ]}
      />
    </Box>
  );
};

export default ProjectSection;
