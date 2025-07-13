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
import { AccountCircle, Menu as MenuIcon } from '@mui/icons-material';
import Sidebar from '../../components/pages/Sidebar';

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
                    width: '100%',
                    transition: 'width 0.3s ease, margin-left 0.3s ease',
                }}
            >
                <Toolbar>
                    <IconButton
                        onClick={toggleSidebar}
                        edge="start"
                        sx={{ mr: 2, color: 'white' }}
                    >
                        <MenuIcon />
                    </IconButton>

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
                    // mt: '60px', // offset for AppBar
                    p: 2,
                    width: `calc(100% - ${currentDrawerWidth}px)`,
                    transition: 'width 0.3s ease, margin-left 0.3s ease',
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
};

export default Layout;
