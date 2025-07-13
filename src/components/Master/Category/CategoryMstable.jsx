import React, { useState, useRef, useMemo, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-theme-quartz.css';

import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

const dummyData = [
    { name: 'Alice Johnson', email: 'alice@example.com', phone: '123-456-7890', address: '123 Main St', flex: 1 },
    { name: 'Bob Smith', email: 'bob@example.com', phone: '234-567-8901', address: '456 Oak Ave', flex: 1 },
    { name: 'Carol Lee', email: 'carol@example.com', phone: '345-678-9012', address: '789 Pine Rd', flex: 1 },
    { name: 'David Kim', email: 'david@example.com', phone: '456-789-0123', address: '321 Cedar Blvd', flex: 1 },
    { name: 'Eva Martinez', email: 'eva@example.com', phone: '567-890-1234', address: '654 Birch Ln', flex: 1 },
];

const CategoryMstable = () => {
    const gridRef = useRef(null);
    const [selectedCount, setSelectedCount] = useState(0);
    const columnDefs = useMemo(() => [
        {
            field: 'name',
            headerName: 'Name',
            filter: true,
            floatingFilter: true,
            checkboxSelection: true,
            headerCheckboxSelection: true,
            sortable: true,
        },
        { field: 'email', headerName: 'Email', filter: true, floatingFilter: true },
        { field: 'phone', headerName: 'Phone', filter: true, floatingFilter: true },
        { field: 'address', headerName: 'Address', filter: true, floatingFilter: true },
    ], []);

    const defaultColDef = useMemo(() => ({
        flex: 1,
        minWidth: 120,
        resizable: true,
    }), []);

    return (
        <div style={{ padding: '10px' }}>
            <div className="ag-theme-quartz-dark" style={{ height: "80vh", width: '100%', position: 'relative' }}>
                <AgGridReact
                    ref={gridRef}
                    rowData={dummyData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    rowSelection="multiple"
                    rowHeight={34}
                    headerHeight={35}
                    floatingFiltersHeight={35}
                    pagination={true}
                    paginationPageSize={20}
                    paginationPageSizeSelector={[20, 50, 100, 500, 1000]}
                    suppressRowClickSelection={true}
                />
                <div style={{ position: 'absolute', bottom: 10, left: 10, fontSize: '14px', color: '#666' }}>
                    Selected Rows: {selectedCount}
                </div>
            </div>
        </div>
    );
};

export default CategoryMstable;
