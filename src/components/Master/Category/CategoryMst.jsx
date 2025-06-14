import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid, TextField, Button, Typography, Paper } from '@mui/material';
import CrudButton from '../../GlobalFunctions/CrudButton';

// Styled container for the form content
const FormContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    maxHeight: 'calc(100vh - 64px)', // Fit within viewport, adjust for app bar
    width: '100%',
    padding: theme.spacing(1),
    boxSizing: 'border-box',
    [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(0.5), // Minimal padding for small screens
    },
}));

// Styled header for title and buttons
const HeaderContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: theme.spacing(1),
    marginBottom: theme.spacing(1.5),
    width: '100%',
    [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

const CategoryMst = () => {
    const handleAdd = () => {
        console.log('Add button clicked');
    };

    const handleEdit = () => {
        console.log('Edit button clicked');
    };

    const handleDelete = () => {
        console.log('Delete button clicked');
    };

    const handlePrint = () => {
        console.log('Print button clicked');
    };

    const handleCheckList = () => {
        console.log('Exit button clicked');
    };

    return (
        <FormContainer>
            <Paper
                elevation={3}
                sx={{
                    p: { xs: 2, sm: 2, md: 2, lg: 2 },
                    maxWidth: { xs: '100%', sm: 800, md: 1000 },
                    mx: 'auto',
                    width: '100%',
                    boxSizing: 'border-box',
                }}
            >
                <HeaderContainer>
                    {/* Centered Typography */}
                    <Typography
                        variant="h1"
                        sx={{
                            flexGrow: 1,
                            textAlign: 'center',
                            fontSize: { xs: '0.9rem', sm: '1.5rem' },
                            fontWeight: 500,
                        }}
                    >
                        Category Form
                    </Typography>

                    {/* CrudButton at End */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CrudButton
                            onAdd={handleAdd}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                            onPrint={handlePrint}
                            onList={handleCheckList}
                            onExport={() => console.log('Export clicked')}
                            onImport={() => console.log('Import clicked')}
                        />
                    </Box>
                </HeaderContainer>

                <Box component="form" noValidate sx={{ width: '100%' }}>
                    <Grid container spacing={{ xs: 1, sm: 1.5 }} sx={{ width: '100%' }}>
                        <Grid item xs={12} sm={6} md={6} lg={3}>
                            <TextField
                                fullWidth
                                label="Name"
                                name="name"
                                size="small"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={3}>
                            <TextField
                                fullWidth
                                label="Abvr"
                                name="abvr"
                                size="small"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={3}>
                            <TextField
                                fullWidth
                                label="Status"
                                name="status1"
                                size="small"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={3}>
                            <TextField
                                fullWidth
                                label="Status"
                                name="status2"
                                size="small"
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                    <Box
                        mt={1.5}
                        display="flex"
                        justifyContent={{ xs: 'center', sm: 'flex-end' }}
                        gap={1}
                    >
                        <Button variant="contained" color="primary" size="small">
                            Save
                        </Button>
                        <Button variant="outlined" size="small">
                            Cancel
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </FormContainer>
    );
};

export default CategoryMst;
