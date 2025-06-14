import React from 'react';
import { Button, Stack, Tooltip } from '@mui/material';
import {
    Add as AddIcon,
    Edit as EditIcon,
    Delete as DeleteIcon,
    Print as PrintIcon,
    ExitToApp as ExitToAppIcon,
    List as ListIcon,
    FileDownload as ExportIcon,
    FileUpload as ImportIcon,
} from '@mui/icons-material';

const smallButtonStyle = {
    minWidth: '32px',
    height: '28px',
    padding: 0,
    borderRadius: '6px',
    outline: 'none',
    boxShadow: 'none',
    '&:focus': {
        outline: 'none',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
    },
};


const CrudButton = ({
    onAdd,
    onEdit,
    onDelete,
    onPrint,
    onList,
    onExport,
    onImport,
}) => {
    return (
        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 1 }}
            sx={{
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                padding: { xs: 1, sm: 1.5 },
            }}
        >
            <Tooltip title="Add" arrow>
                <Button variant="contained" size="small" sx={smallButtonStyle} onClick={onAdd}>
                    <AddIcon fontSize="small" />
                </Button>
            </Tooltip>

            <Tooltip title="Edit" arrow>
                <Button variant="contained" size="small" sx={smallButtonStyle} onClick={onEdit}>
                    <EditIcon fontSize="small" />
                </Button>
            </Tooltip>

            <Tooltip title="Delete" arrow>
                <Button variant="contained" size="small" sx={smallButtonStyle} onClick={onDelete}>
                    <DeleteIcon fontSize="small" />
                </Button>
            </Tooltip>

            <Tooltip title="Print" arrow>
                <Button variant="contained" size="small" sx={smallButtonStyle} onClick={onPrint}>
                    <PrintIcon fontSize="small" />
                </Button>
            </Tooltip>

            <Tooltip title="List" arrow>
                <Button variant="contained" size="small" sx={smallButtonStyle} onClick={onList}>
                    <ListIcon fontSize="small" />
                </Button>
            </Tooltip>

            <Tooltip title="Import" arrow>
                <Button variant="contained" size="small" sx={smallButtonStyle} onClick={onExport}>
                    <ExportIcon fontSize="small" />
                </Button>
            </Tooltip>

            <Tooltip title="Export" arrow>
                <Button variant="contained" size="small" sx={smallButtonStyle} onClick={onImport}>
                    <ImportIcon fontSize="small" />
                </Button>
            </Tooltip>
        </Stack>
    );
};

export default CrudButton;