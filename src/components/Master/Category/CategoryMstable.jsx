import React, { useState, useEffect } from 'react';
import TableComponent from '../../GlobalFunctions/TableComponent';

const CategoryMstable = () => {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'name', headerName: 'Category Name', width: 200 },
        { field: 'description', headerName: 'Description', width: 300 },
    ];

    useEffect(() => {
        // Simulate fetching data
        setTimeout(() => {
            try {
                // Example static data
                const data = [
                    { id: 1, name: 'Electronics', description: 'Gadgets and devices' },
                    { id: 2, name: 'Books', description: 'All kinds of books' },
                ];
                setRows(data);
                setLoading(false);
            } catch (err) {
                setError('Failed to load data');
                setLoading(false);
            }
        }, 1000);
    }, []);

    return (
        <div>
            <TableComponent
                rows={rows}
                columns={columns}
                loading={loading}
                error={error}
                height={500}
                pageSizeOptions={[5, 10]}
            />
        </div>
    );
};

export default CategoryMstable;
