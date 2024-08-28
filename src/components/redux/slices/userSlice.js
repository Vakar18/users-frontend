import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (params) => {
    const { page, search, filters } = params;
    const response = await axios.get('http://localhost:3000/api/users', {
        params: {
            page,
            search,
            domain: filters.domain,
            gender: filters.gender,
            available: filters.available
        }
    });
    return response.data;
});

// Handle response structure to match API data
const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        currentPage: 1,
        totalPages: 1,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload.users;
                state.currentPage = action.payload.currentPage;
                state.totalPages = action.payload.totalPages;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default userSlice.reducer;
