import React, { useState } from "react";
import SearchBar from "../SearchBar";
import Filters from "../Filter";
import UserList from "../UserList";
import TeamSidebar from "../TeamSidebar";

const HomePage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [teamMembers, setTeamMembers] = useState([]);

    const handleAddMember = (user) => {
        if (!teamMembers.find(member => member._id === user._id)) {
            setTeamMembers([...teamMembers, user]);
            if (!isSidebarOpen) setIsSidebarOpen(true);
        }
    };

    const handleRemoveMember = (user) => {
        const updatedMembers = teamMembers.filter(member => member._id !== user._id);
        setTeamMembers(updatedMembers);
        if (updatedMembers.length === 0) setIsSidebarOpen(false);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div style={{ display: "flex", flexDirection: isSidebarOpen ? "row" : "column" , margin:10}}>
            <div style={{ flexGrow: 1, paddingRight: isSidebarOpen ? "300px" : "0" }}>
                <SearchBar />
                <Filters />
                <UserList onAddMember={handleAddMember} />
            </div>
            {isSidebarOpen && (
                <TeamSidebar
                    teamMembers={teamMembers}
                    onRemoveMember={handleRemoveMember}
                    onCloseSidebar={toggleSidebar}
                />
            )}
        </div>
    );
};

export default HomePage;
