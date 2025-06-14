import React, { useState, useEffect } from 'react';
import {
    Box,
    Grid,
    TextField,
    Button,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Alert,
} from '@mui/material';
import {
    Add as AddIcon,
    Edit as EditIcon,
    Delete as DeleteIcon,
    List as ListIcon,
    Close as CloseIcon,
} from '@mui/icons-material';

const CrudForm = () => {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        code: '',
        date: '',
        description: '',
        image: null,
    });
    const [dataList, setDataList] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [error, setError] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    // Load initial data and set current date
    useEffect(() => {
        const initialData = [
            { id: 1, name: 'Item 1', code: 'C001', date: '2025-04-01', description: 'First item', image: null },
            { id: 2, name: 'Item 2', code: 'C002', date: '2025-04-02', description: 'Second item', image: null },
        ];
        setDataList(initialData);
        const currentDate = new Date().toISOString().split('T')[0];
        setFormData((prev) => ({ ...prev, date: currentDate }));
    }, []);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle image upload
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prev) => ({ ...prev, image: file }));
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Add new record
    const handleAdd = () => {
        if (!formData.name || !formData.code || !formData.date || !formData.description) {
            setError('All fields are required except ID and Image.');
            return;
        }
        if (formData.id === '') {
            const newId = dataList.length > 0 ? Math.max(...dataList.map((item) => item.id)) + 1 : 1;
            const currentDate = new Date().toISOString().split('T')[0];
            setDataList([...dataList, { ...formData, id: newId, date: formData.date || currentDate }]);
        } else {
            setDataList(
                dataList.map((item) =>
                    item.id === parseInt(formData.id) ? { ...formData, id: parseInt(formData.id) } : item
                )
            );
        }
        resetForm();
    };

    // Edit record
    const handleEdit = () => {
        if (selectedId) {
            const selectedItem = dataList.find((item) => item.id === selectedId);
            if (selectedItem) {
                setFormData({ ...selectedItem, image: selectedItem.image || null });
                setImagePreview(selectedItem.image ? URL.createObjectURL(selectedItem.image) : null);
            }
        }
    };

    // Remove record
    const handleRemove = () => {
        if (selectedId) {
            setDataList(dataList.filter((item) => item.id !== selectedId));
            resetForm();
        }
    };

    // List records
    const handleList = () => {
        console.log('Current Data List:', dataList);
    };

    // Exit/Clear
    const handleExit = () => {
        resetForm();
        setSelectedId(null);
    };

    // Reset form
    const resetForm = () => {
        const currentDate = new Date().toISOString().split('T')[0];
        setFormData({ id: '', name: '', code: '', date: currentDate, description: '', image: null });
        setImagePreview(null);
        setError(null);
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                bgcolor: 'grey.900',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: { xs: 2, sm: 4 },
            }}
        >
            <Box
                sx={{
                    bgcolor: 'grey.800',
                    p: { xs: 3, sm: 4 },
                    borderRadius: 2,
                    boxShadow: 3,
                    width: '100%',
                    maxWidth: 900,
                    transition: 'box-shadow 0.3s',
                    '&:hover': {
                        boxShadow: 6,
                    },
                }}
            >
                <Typography variant="h5" align="center" color="primary.contrastText" gutterBottom>
                    CRUD Form
                </Typography>

                {/* Form Fields */}
                <Grid container spacing={2} sx={{ mb: 3 }}>
                    <Grid item xs={12} sm={3}>
                        <TextField
                            fullWidth
                            label="ID"
                            name="id"
                            type="number"
                            value={formData.id}
                            onChange={handleInputChange}
                            variant="outlined"
                            size="small"
                            sx={{
                                bgcolor: 'grey.700',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: 'grey.500' },
                                    '&:hover fieldset': { borderColor: 'primary.main' },
                                    '&.Mui-focused fieldset': { borderColor: 'primary.main' },
                                },
                                '& .MuiInputLabel-root': { color: 'grey.400' },
                                '& .MuiInputBase-input': { color: 'white' },
                            }}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TextField
                            fullWidth
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            variant="outlined"
                            size="small"
                            sx={{
                                bgcolor: 'grey.700',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: 'grey.500' },
                                    '&:hover fieldset': { borderColor: 'primary.main' },
                                    '&.Mui-focused fieldset': { borderColor: 'primary.main' },
                                },
                                '& .MuiInputLabel-root': { color: 'grey.400' },
                                '& .MuiInputBase-input': { color: 'white' },
                            }}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TextField
                            fullWidth
                            label="Code"
                            name="code"
                            value={formData.code}
                            onChange={handleInputChange}
                            variant="outlined"
                            size="small"
                            sx={{
                                bgcolor: 'grey.700',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: 'grey.500' },
                                    '&:hover fieldset': { borderColor: 'primary.main' },
                                    '&.Mui-focused fieldset': { borderColor: 'primary.main' },
                                },
                                '& .MuiInputLabel-root': { color: 'grey.400' },
                                '& .MuiInputBase-input': { color: 'white' },
                            }}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TextField
                            fullWidth
                            label="Date"
                            name="date"
                            type="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            variant="outlined"
                            size="small"
                            InputLabelProps={{ shrink: true }}
                            sx={{
                                bgcolor: 'grey.700',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: 'grey.500' },
                                    '&:hover fieldset': { borderColor: 'primary.main' },
                                    '&.Mui-focused fieldset': { borderColor: 'primary.main' },
                                },
                                '& .MuiInputLabel-root': { color: 'grey.400' },
                                '& .MuiInputBase-input': { color: 'white' },
                            }}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            variant="outlined"
                            multiline
                            rows={4}
                            size="small"
                            sx={{
                                bgcolor: 'grey.700',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: 'grey.500' },
                                    '&:hover fieldset': { borderColor: 'primary.main' },
                                    '&.Mui-focused fieldset': { borderColor: 'primary.main' },
                                },
                                '& .MuiInputLabel-root': { color: 'grey.400' },
                                '& .MuiInputBase-input': { color: 'white' },
                            }}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box
                            sx={{
                                height: 100,
                                bgcolor: 'grey.700',
                                border: 1,
                                borderColor: 'grey.500',
                                borderRadius: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden',
                            }}
                        >
                            <input
                                accept="image/*"
                                id="imageUpload"
                                type="file"
                                onChange={handleImageChange}
                                style={{ display: 'none' }}
                            />
                            <label htmlFor="imageUpload" style={{ width: '100%', height: '100%' }}>
                                <Box
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        color: 'primary.main',
                                        '&:hover': { color: 'primary.light' },
                                        transition: 'color 0.3s',
                                    }}
                                >
                                    {imagePreview ? (
                                        <img
                                            src={imagePreview}
                                            alt="Preview"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 4 }}
                                        />
                                    ) : (
                                        <Typography variant="body2">Upload Image</Typography>
                                    )}
                                </Box>
                            </label>
                        </Box>
                    </Grid>
                </Grid>

                {/* Error Message */}
                {error && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {error}
                    </Alert>
                )}

                {/* CRUD Buttons */}
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2 }}
                    sx={{ mb: 3, justifyContent: 'space-between' }}
                >
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2 }}>
                        <Button
                            variant="contained"
                            color="success"
                            startIcon={<AddIcon />}
                            onClick={handleAdd}
                            size="small"
                            sx={{
                                minWidth: { xs: '100%', sm: 100 },
                                fontSize: '0.75rem',
                                textTransform: 'none',
                                borderRadius: 1,
                                '&:hover': { boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)' },
                            }}
                            aria-label="Add item"
                        >
                            Add
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<EditIcon />}
                            onClick={handleEdit}
                            size="small"
                            disabled={!selectedId}
                            sx={{
                                minWidth: { xs: '100%', sm: 100 },
                                fontSize: '0.75rem',
                                textTransform: 'none',
                                borderRadius: 1,
                                '&:hover': { boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)' },
                            }}
                            aria-label="Edit item"
                        >
                            Edit
                        </Button>
                        <Button
                            variant="contained"
                            color="error"
                            startIcon={<DeleteIcon />}
                            onClick={handleRemove}
                            size="small"
                            disabled={!selectedId}
                            sx={{
                                minWidth: { xs: '100%', sm: 100 },
                                fontSize: '0.75rem',
                                textTransform: 'none',
                                borderRadius: 1,
                                '&:hover': { boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)' },
                            }}
                            aria-label="Remove item"
                        >
                            Remove
                        </Button>
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2 }}>
                        <Button
                            variant="contained"
                            color="warning"
                            startIcon={<ListIcon />}
                            onClick={handleList}
                            size="small"
                            sx={{
                                minWidth: { xs: '100%', sm: 100 },
                                fontSize: '0.75rem',
                                textTransform: 'none',
                                borderRadius: 1,
                                '&:hover': { boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)' },
                            }}
                            aria-label="List items"
                        >
                            List
                        </Button>
                        <Button
                            variant="contained"
                            color="inherit"
                            startIcon={<CloseIcon />}
                            onClick={handleExit}
                            size="small"
                            sx={{
                                minWidth: { xs: '100%', sm: 100 },
                                fontSize: '0.75rem',
                                textTransform: 'none',
                                borderRadius: 1,
                                bgcolor: 'grey.600',
                                color: 'white',
                                '&:hover': { bgcolor: 'grey.700', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)' },
                            }}
                            aria-label="Exit form"
                        >
                            Exit
                        </Button>
                    </Stack>
                </Stack>

                {/* Data Table */}
                <TableContainer component={Paper} sx={{ bgcolor: 'grey.700', borderRadius: 2 }}>
                    <Table size="small">
                        <TableHead>
                            <TableRow sx={{ bgcolor: 'primary.dark' }}>
                                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>ID</TableCell>
                                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Name</TableCell>
                                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Code</TableCell>
                                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Date</TableCell>
                                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Description</TableCell>
                                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Image</TableCell>
                                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dataList.map((item) => (
                                <TableRow
                                    key={item.id}
                                    hover
                                    onClick={() => {
                                        setSelectedId(item.id);
                                        setFormData({ ...item, image: item.image || null });
                                        setImagePreview(item.image ? URL.createObjectURL(item.image) : null);
                                    }}
                                    sx={{ '&:hover': { bgcolor: 'grey.600' }, cursor: 'pointer' }}
                                >
                                    <TableCell sx={{ color: 'white', borderBottom: '1px solid', borderColor: 'grey.600' }}>
                                        {item.id}
                                    </TableCell>
                                    <TableCell sx={{ color: 'white', borderBottom: '1px solid', borderColor: 'grey.600' }}>
                                        {item.name}
                                    </TableCell>
                                    <TableCell sx={{ color: 'white', borderBottom: '1px solid', borderColor: 'grey.600' }}>
                                        {item.code}
                                    </TableCell>
                                    <TableCell sx={{ color: 'white', borderBottom: '1px solid', borderColor: 'grey.600' }}>
                                        {item.date}
                                    </TableCell>
                                    <TableCell sx={{ color: 'white', borderBottom: '1px solid', borderColor: 'grey.600' }}>
                                        {item.description}
                                    </TableCell>
                                    <TableCell sx={{ color: 'white', borderBottom: '1px solid', borderColor: 'grey.600' }}>
                                        {item.image ? (
                                            <img
                                                src={URL.createObjectURL(item.image)}
                                                alt="Item"
                                                style={{ width: 64, height: 64, objectFit: 'cover', borderRadius: 4 }}
                                            />
                                        ) : (
                                            'No Image'
                                        )}
                                    </TableCell>
                                    <TableCell sx={{ color: 'white', borderBottom: '1px solid', borderColor: 'grey.600' }}>
                                        <Button
                                            variant="contained"
                                            size="small"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedId(item.id);
                                                setFormData({ ...item, image: item.image || null });
                                                setImagePreview(item.image ? URL.createObjectURL(item.image) : null);
                                            }}
                                            sx={{
                                                bgcolor: 'primary.main',
                                                '&:hover': { bgcolor: 'primary.dark' },
                                                textTransform: 'none',
                                                fontSize: '0.75rem',
                                                borderRadius: 1,
                                            }}
                                        >
                                            Select
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
};

export default CrudForm;