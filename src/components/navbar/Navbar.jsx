import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { BsMoon, BsFillSunFill } from "react-icons/bs";
import { Container } from "@mui/material";
import { NavLinksConstant } from "../../constant/navbar/navConstant";
import { NavLink, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./navbar.css";
import Sidebar from "../sidebar/Sidebar";
import { useTheme } from "../contexts/themeContext";

export default function Navbar() {
  let [isOpen, setIsOpen] = React.useState(false);
  const { darkMode, toggleTheme } = useTheme();
  let location = useLocation();
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#0C1821" }}>
        <Container>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}>
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}>
              Anuj Singh
            </Typography>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Box component="div" className="navStyle">
                {NavLinksConstant.length > 0 &&
                  NavLinksConstant.map((links, index) => {
                    return (
                      <NavLink
                        key={links.id}
                        to={links.path}
                        className={`navLinks ${
                          location === links.path && "active"
                        } `}>
                        {links.pathname}
                      </NavLink>
                    );
                  })}
              </Box>
              <IconButton
                size="medium"
                aria-label="show 4 new mails"
                color="inherit"
                onClick={toggleTheme}>
                {darkMode ? <BsFillSunFill /> : <BsMoon />}
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="medium"
                aria-label="show 4 new mails"
                onClick={handleOpen}
                color="inherit">
                <GiHamburgerMenu />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Sidebar open={isOpen} setOpen={setIsOpen} />
    </Box>
  );
}
