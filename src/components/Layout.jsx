// Layout.js
import React, { useState } from 'react';
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Menu,
    MenuItem,
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import Sidebar from './Sidebar';

const drawerWidth = 200;
const collapsedWidth = 60;

const Layout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const handleMenu = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const [hovered, setHovered] = useState(false);
    const isOpen = sidebarOpen || hovered;
    const currentDrawerWidth = isOpen ? drawerWidth : collapsedWidth;


    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', width: '100vw', overflowX: 'hidden' }}>
            {/* Sidebar */}
            <Sidebar
                sidebarOpen={sidebarOpen}
                toggleSidebar={toggleSidebar}
                drawerWidth={drawerWidth}
                collapsedWidth={collapsedWidth}
            />

            {/* AppBar */}
            <AppBar
                position="fixed"
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    backgroundColor: '#1e1e2f',
                    ml: `${currentDrawerWidth}px`,
                    width: `calc(100% - ${currentDrawerWidth}px)`,
                    transition: 'width 0.3s ease, margin-left 0.3s ease',
                }}
            >
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        MyApp
                    </Typography>
                    <IconButton onClick={handleMenu} sx={{ color: 'white' }}>
                        <AccountCircle />
                    </IconButton>
                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>

            {/* Main Content */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    backgroundColor: '#f5f5f5',
                    mt: '64px', // offset for AppBar
                    p: 2,
                    width: `calc(100% - ${currentDrawerWidth}px)`,
                    transition: 'width 0.3s ease',
                    overflowX: 'hidden',
                }}
            >
                {children}
            </Box>
        </Box>
    );
};

export default Layout;
