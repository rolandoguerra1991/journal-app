import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Navbar, Sidebar } from "../components";

const drawerWidth = 280;

const JournalLayout = ({ children }) => {
  return (
    <Box xs={{ display: "flex" }}>
      <Navbar drawerWidth={drawerWidth} />
      <Sidebar drawerWidth={drawerWidth} />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: 'auto' }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default JournalLayout;
