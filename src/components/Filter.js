import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../components/redux/slices/userSlice';
import { FormControl, InputLabel, Select, MenuItem, Button, Box } from '@mui/material';

const Filters = () => {
    const dispatch = useDispatch();
    const [filters, setFilters] = React.useState({
        domain: '',
        gender: '',
        available: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const applyFilters = () => {
        dispatch(fetchUsers({ page: 1, search: '', filters }));
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <FormControl sx={{ minWidth: 150 }} size="small">
                <InputLabel>Domain</InputLabel>
                <Select
                    name="domain"
                    value={filters.domain}
                    onChange={handleChange}
                    label="Domain"
                >
                    <MenuItem value=""><em>All Domains</em></MenuItem>
                    <MenuItem value="Sales">Sales</MenuItem>
                    <MenuItem value="UI Designing">UI Designing</MenuItem>
                    <MenuItem value="Business Development">Business Development</MenuItem>
                    <MenuItem value="IT">IT</MenuItem>
                    <MenuItem value="Finance">Finance</MenuItem>
                    <MenuItem value="Marketing">Marketing</MenuItem>
                    <MenuItem value="Management">Management</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 150 }} size="small">
                <InputLabel>Gender</InputLabel>
                <Select
                    name="gender"
                    value={filters.gender}
                    onChange={handleChange}
                    label="Gender"
                >
                    <MenuItem value=""><em>All Genders</em></MenuItem>
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Agender">Agender</MenuItem>
                    <MenuItem value="Polygender">Polygender</MenuItem>
                    <MenuItem value="Non-binary">Non-binary</MenuItem>
                    <MenuItem value="Bigender">Bigender</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 150 }} size="small">
                <InputLabel>Availability</InputLabel>
                <Select
                    name="available"
                    value={filters.available}
                    onChange={handleChange}
                    label="Availability"
                >
                    <MenuItem value=""><em>All</em></MenuItem>
                    <MenuItem value="true">Available</MenuItem>
                    <MenuItem value="false">Unavailable</MenuItem>
                </Select>
            </FormControl>

            <Button
                variant="contained"
                color="primary"
                onClick={applyFilters}
                sx={{ height: '40px', whiteSpace: 'nowrap' }}
            >
                Apply Filters
            </Button>
        </Box>
    );
};

export default Filters;
    