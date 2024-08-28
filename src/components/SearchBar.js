import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../components/redux/slices/userSlice';
import { TextField } from '@mui/material';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedTerm(searchTerm);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm]);

    useEffect(() => {
        dispatch(fetchUsers({ page: 1, search: debouncedTerm, filters: {} }));
    }, [debouncedTerm, dispatch]);

    return (
        <TextField
            label="Search by name..."
            variant="outlined"
            fullWidth
            size="mid"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ mb: 4 }}
        />
    );
};

export default SearchBar;
