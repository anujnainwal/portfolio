import { Box, Drawer } from "@mui/material";
import React from "react";
import { NavLinksConstant } from "../../constant/navbar/navConstant";
import { NavLink, useLocation } from "react-router-dom";
import "./assets/sidebar.css";
const Sidebar = ({ open, setOpen }) => {
  let location = useLocation();
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => setOpen(!open)}
      PaperProps={{
        sx: {
          width: 200,
          backgroundColor: "#0C1821",
        },
      }}>
      <Box component="div">
        {NavLinksConstant.length > 0 &&
          NavLinksConstant.map((links, index) => {
            return (
              <NavLink
                key={links.id}
                to={links.path}
                className={`navLink ${location === links.path && "active"} `}>
                {links.pathname}
              </NavLink>
            );
          })}
      </Box>
    </Drawer>
  );
};

export default Sidebar;
