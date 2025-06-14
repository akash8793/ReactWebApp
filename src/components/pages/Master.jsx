import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import BoxWithIcon from '../../atoms/BoxWithIcon';
import { useLocation, useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));

const Master = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleBoxClick = (path) => {
        navigate("/");
    };

    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid container rowSpacing={2.5} columnSpacing={6}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <BoxWithIcon
                        totalCount={10}
                        activeCount={10}
                        inactiveCount={0}
                        link="/categorymst"
                        title="Category"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <BoxWithIcon
                        totalCount={10}
                        activeCount={10}
                        inactiveCount={0}
                        link="/"
                        title="Item"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <BoxWithIcon
                        totalCount={10}
                        activeCount={10}
                        inactiveCount={0}
                        link="/"
                        title="Item Code"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <BoxWithIcon
                        totalCount={10}
                        activeCount={10}
                        inactiveCount={0}
                        link="/"
                        title="Shade"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <BoxWithIcon
                        totalCount={10}
                        activeCount={10}
                        inactiveCount={0}
                        link="/"
                        title="Brand"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <BoxWithIcon
                        totalCount={10}
                        activeCount={10}
                        inactiveCount={0}
                        link="/"
                        title="Quality"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <BoxWithIcon
                        totalCount={10}
                        activeCount={10}
                        inactiveCount={0}
                        link="/"
                        title="Unit"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <BoxWithIcon
                        totalCount={10}
                        activeCount={10}
                        inactiveCount={0}
                        link="/"
                        title="Range"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <BoxWithIcon
                        totalCount={10}
                        activeCount={10}
                        inactiveCount={0}
                        link="/"
                        title="Size"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <BoxWithIcon
                        totalCount={10}
                        activeCount={10}
                        inactiveCount={0}
                        link="/"
                        title="Item Type"
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Master;