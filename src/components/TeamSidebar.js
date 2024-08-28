import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const TeamSidebar = ({ teamMembers, onRemoveMember, onCloseSidebar }) => {

    return (
        <Box
            sx={{
                position: 'fixed',
                right: 0,
                top: 0,
                width: '300px',
                height: '100%',
                backgroundColor: '#f8f9fa',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                padding: 3,
                display: 'flex',
                flexDirection: 'column',
                overflowY: 'auto',
                alignItems: 'center',
            }}
        >
            <Typography variant="h6" component="div" sx={{ marginBottom: 2 }}>
                My Team
            </Typography>
            <ul style={{ listStyle: 'none', padding: 0, width: '100%' }}>
                {teamMembers.map((member) => (
                    <li key={member._id} style={{ marginBottom: '10px' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '8px',
                                borderRadius: '5px',
                                backgroundColor: '#fff',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <div>
                                <Typography variant="body1">{member.first_name}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {member.email}
                                </Typography>
                            </div>
                            <Button
                                size="small"
                                sx={{
                                    backgroundColor: '#dc3545',
                                    color: '#fff',
                                    '&:hover': {
                                        backgroundColor: '#c82333',
                                    },
                                }}
                                onClick={() => onRemoveMember(member)}
                            >
                                Remove
                            </Button>
                        </Box>
                    </li>
                ))}
            </ul>
            <Button
                onClick={onCloseSidebar}
                sx={{
                    marginTop: 'auto',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#0056b3',
                    },
                }}
            >
                Close
            </Button>
        </Box>
    );
};

export default TeamSidebar;
