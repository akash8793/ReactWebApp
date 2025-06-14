import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

const TableComponent = ({
    rows = [],
    columns = [],
    loading = false,
    error = null,
    pageSizeOptions = [5, 10, 15],
    height = 400,
}) => {
    return (
        <Paper sx={{ height: '100%', width: '100%' }}>
            <Box sx={{ overflowX: 'auto', height: '100%' }}>
                {error ? (
                    <Box sx={{ p: 2 }}>
                        <Typography color="error">Error: {error}</Typography>
                    </Box>
                ) : loading ? (
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                        }}
                    >
                        <CircularProgress />
                    </Box>
                ) : (
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        getRowId={(row) => row._id || row.id || row.categoryId} 
                        loading={loading}
                        pageSizeOptions={pageSizeOptions}
                        initialState={{
                            pagination: { paginationModel: { page: 0, pageSize: pageSizeOptions[0] } },
                        }}
                        sx={{
                            border: 0,
                            backgroundColor: 'background.paper',
                            '& .MuiDataGrid-columnHeader': {
                                '& .MuiDataGrid-menuIcon': {
                                    display: 'none',
                                },
                            },
                        }}
                    />

                )}
            </Box>
        </Paper>
    );
};

export default TableComponent;
