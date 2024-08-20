import React from "react";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export const MainLayout = ({
    title = "",
    sidebar = [],
    children
}) => (
    <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header>{title}</Header>
        <Sidebar
            width={240}
            data={sidebar}
        />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            {children}
        </Box>
    </Box>
);