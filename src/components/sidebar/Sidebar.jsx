import { Drawer } from "@mui/material";
import React from "react";

const Sidebar = ({ open, setOpen }) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => setOpen(!open)}
      sx={{ width: 800 }}>
      Hello
    </Drawer>
  );
};

export default Sidebar;
