import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const UserCard = ({ user, onAddMember }) => {
    const handleAddToTeam = () => {
        onAddMember(user);
    };

    return (
        <Card
            sx={{
                maxWidth: 345,
                borderRadius: 3,
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5)',
                overflow: 'hidden',
                backgroundColor: "rgba(214, 212, 208, 0.8)",
                margin: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
                '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.5)',
                    filter: 'brightness(90%)',
                }
            }}
        >
            <CardMedia
                component="img"
                image={user.avatar || "https://img.freepik.com/free-photo/image-icon-front-side-with-white-background_187299-39874.jpg?w=740&t=st=1724748877~exp=1724749477~hmac=91329e035a90158ecc12fa9e971848a841b5360344b130b184b362aedc5d6be7"}
                alt={`${user.first_name} ${user.last_name}`}
                sx={{
                    width: 150,
                    height: 150,
                    borderRadius: "50%",
                    marginTop: 2,
                    objectFit: "cover",
                    border: "4px solid #ffffff",
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    backgroundColor: "#82ada8"
                }}
            />
            <CardContent
                sx={{
                    padding: 3,
                    backgroundColor: "rgba(214, 212, 208, 0.7)",
                    textAlign: "center",
                    flexGrow: 1,
                    width: '100%',
                }}
            >
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        fontWeight: "bold",
                        color: "#343a40",
                    }}
                >
                    {user.first_name} {user.last_name}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginTop: 1 }}
                >
                    Domain: {user.domain}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginTop: 0.5 }}
                >
                    Gender: {user.gender}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginTop: 0.5 }}
                >
                    Email: {user.email}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginTop: 0.5, marginBottom: 2 }}
                >
                    Available: {user.available ? 'Yes' : 'No'}
                </Typography>
            </CardContent>
            <CardActions
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: 2,
                    backgroundColor: "#f1f3f5",
                    width: '100%',
                }}
            >
                <Button
                    onClick={handleAddToTeam}
                    size="medium"
                    sx={{
                        backgroundColor: "#007bff",
                        color: "#fff",
                        '&:hover': {
                            backgroundColor: "#0056b3",
                        },
                        textTransform: "none",
                        fontWeight: "bold",
                    }}
                >
                    Add to Team
                </Button>
            </CardActions>
        </Card>
    );
};

export default UserCard;
