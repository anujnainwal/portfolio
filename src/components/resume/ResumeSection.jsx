import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import "./resume.css";
const ResumeSection = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    // Start the download logic here
    // You can use window.open or any other method to initiate the download
    setIsDownloading(true);

    // Simulate a delay before resetting the download state
    setTimeout(() => {
      window.open(
        "https://drive.google.com/file/d/1qxmFOjA_yyJJuOAbs8MV6Qs9pKYPtSyb/view",
        "_blank"
      );
      setIsDownloading(false);
    }, 3000); // 3 seconds, adjust as needed
  };

  return (
    <Box
      sx={{
        background: "#050a0eea",
        position: "relative",
        textAlign: "center",
      }}
      className="resumeBox">
      <Button
        variant="contained"
        size="large"
        className="buttonDownloadingResunme"
        onClick={handleDownload}
        sx={{
          position: "absolute",
          top: "10px", // Adjust as needed for vertical positioning
          right: "10px", // Adjust as needed for horizontal positioning

          opacity: isDownloading ? 0.7 : 1,
        }}
        disabled={isDownloading}>
        {isDownloading ? "Downloading..." : "Download PDF"}
      </Button>
      <iframe
        src="https://drive.google.com/file/d/1qxmFOjA_yyJJuOAbs8MV6Qs9pKYPtSyb/preview"
        width="80%"
        height={500}
        title="Resume"
        style={{ margin: "5rem 0" }}></iframe>
    </Box>
  );
};

export default ResumeSection;
