import React, { useState } from 'react';
import {
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider,
    Tooltip,
    Toolbar,
} from '@mui/material';
import {
    Dashboard as DashboardIcon,
    ReceiptLong as ReceiptLongIcon,
    People as PeopleIcon,
} from '@mui/icons-material';
import ReportIcon from '@mui/icons-material/Report';
import { useLocation, useNavigate } from 'react-router-dom';

const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
    { text: 'Master', icon: <PeopleIcon />, path: '/master' },
    { text: 'Transaction', icon: <ReceiptLongIcon />, path: '/transaction' },
    { text: 'Report', icon: <ReportIcon />, path: '/report' },
];

const Sidebar = ({ sidebarOpen, toggleSidebar, drawerWidth, collapsedWidth }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const [hovered, setHovered] = useState(false);
    const [lockedOpen, setLockedOpen] = useState(false);

    const isOpen = hovered || lockedOpen;

    return (
        <Drawer
            variant="permanent"
            onMouseEnter={() => !lockedOpen && setHovered(true)}
            onMouseLeave={() => !lockedOpen && setHovered(false)}
            sx={{
                width: isOpen ? drawerWidth : collapsedWidth,
                flexShrink: 0,
                whiteSpace: 'nowrap',
                boxSizing: 'border-box',
                transition: 'width 0.3s ease',
                '& .MuiDrawer-paper': {
                    width: isOpen ? drawerWidth : collapsedWidth,
                    transition: 'width 0.3s ease',
                    backgroundColor: '#1e1e2f',
                    color: '#fff',
                    overflowX: 'hidden',
                    pt: 8, // Push below AppBar
                },
            }}
        >

            {/* <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} /> */}

            <List>
                {menuItems.map((item) => (
                    <Tooltip key={item.text} title={isOpen ? '' : item.text} placement="right">
                        <ListItemButton
                            selected={location.pathname === item.path}
                            onClick={() => navigate(item.path)}
                            sx={{
                                justifyContent: isOpen ? 'initial' : 'center',
                                px: 2.5,
                                '&.Mui-selected': {
                                    backgroundColor: '#3f51b5',
                                    color: '#fff',
                                    '& .MuiListItemIcon-root': { color: '#fff' },
                                },
                                '&:hover': {
                                    backgroundColor: '#2c2c3f',
                                },
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    color: 'inherit',
                                    minWidth: 0,
                                    mr: isOpen ? 2 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            {isOpen && <ListItemText primary={item.text} />}
                        </ListItemButton>
                    </Tooltip>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;