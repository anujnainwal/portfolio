import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import "./assets/css/landing.css";
import Loader from "../loading/Loader";
import Typewriter from "typewriter-effect";

const Landing = () => {
  let [isLoading, setIsLoading] = useState(true);
  const socialLinks = Object.freeze([
    {
      id: 1,
      name: "Linkdn",
      className: "icons",
      path: "https://www.linkedin.com/in/anuj-singh-nainwal/",
      icon: <AiFillLinkedin fontSize={25} />,
    },
    {
      id: 2,
      name: "Github",
      className: "icons",
      path: "https://github.com/anujnainwal",
      icon: <AiFillGithub fontSize={25} />,
    },
    {
      id: 3,
      name: "Gmail",
      className: "icons",
      path: "mailto:anujsinghnainwal@gmail.com",
      icon: <BiLogoGmail fontSize={25} />,
    },
  ]);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <Box
      sx={{
        background: "#050a0eea",
        display: "flex",
        height: "100dvh",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        padding: "20px", // Add some padding for spacing
        textAlign: "center",
      }}
    >
      <Typography variant="h3" color="#fff">
        Anuj Singh Nainwal
      </Typography>
      <Box component="div" margin="30px 0">
        <Typography variant="h4" color="white" sx={{ display: "flex" }}>
          I'm a
          <span style={{ margin: "0 10px", color: "#007FFF " }} color="red">
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Backend Developer")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })

                  .pauseFor(2500)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
            />
          </span>
        </Typography>
      </Box>
      <Box
        component="div"
        sx={{ padding: "30px 0px", display: "flex", gap: "20px" }}
      >
        {socialLinks.length > 0 &&
          socialLinks.map((links) => {
            return (
              <NavLink
                to={links.path}
                key={links.id}
                target="_blank"
                rel="noopener noreferrer"
                className="icons_links"
              >
                {links.icon}
              </NavLink>
            );
          })}
      </Box>
    </Box>
  );
};

export default Landing;
