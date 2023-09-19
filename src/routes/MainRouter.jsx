import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Skill from "../pages/Skill/Skill";
import Education from "../pages/Education/Education";
import Experience from "../pages/Experience/Experience";
import Project from "../pages/Project/Project";
const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/resume" element={<h2>Resume</h2>} />

        <Route path="/*" element={<>Not Found</>} />
      </Routes>
    </>
  );
};

export default MainRouter;
