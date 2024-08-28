import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action to create a team
export const createTeam = createAsyncThunk(
    'team/createTeam',
    async (team) => {
        const response = await axios.post('http://localhost:3000/api/team', team);
        return response.data;
    }
);

// Async action to fetch team details (optional, if needed later)
export const fetchTeamDetails = createAsyncThunk(
    'team/fetchTeamDetails',
    async (teamId) => {
        const response = await axios.get(`http://localhost:3000/api/team/${teamId}`);
        return response.data;
    }
);

const teamSlice = createSlice({
    name: 'team',
    initialState: {
        team: {
            name: 'My Team',
            members: [],
        },
        loading: false,
        error: null,
    },
    reducers: {
        // Adds a member to the team, ensuring unique domains
        addMemberToTeam: (state, action) => {
            const member = action.payload;
            const memberDomainExists = state.team.members.some(
                (m) => m.domain === member.domain
            );
            if (!memberDomainExists && member.available) {
                state.team.members.push(member);
            }
        },
        // Removes a member from the team
        removeMemberFromTeam: (state, action) => {
            state.team.members = state.team.members.filter(
                (member) => member._id !== action.payload._id
            );
        },
        // Resets the team state
        resetTeam: (state) => {
            state.team = {
                name: 'My Team',
                members: [],
            };
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createTeam.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createTeam.fulfilled, (state, action) => {
                state.loading = false;
                state.team = action.payload;
            })
            .addCase(createTeam.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchTeamDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTeamDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.team = action.payload;
            })
            .addCase(fetchTeamDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

// Exporting the actions
export const { addMemberToTeam, removeMemberFromTeam, resetTeam } = teamSlice.actions;

// Exporting the reducer
export default teamSlice.reducer;
