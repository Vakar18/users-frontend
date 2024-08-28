import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const TeamDetails = () => {
    const { team } = useSelector((state) => state.team);

    if (!team) {
        return <div>No team selected.</div>;
    }

    return (
        <div className="team-details bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Team: {team.name}</h2>
            <ul className="list-disc list-inside">
                {team.members.map((member) => (
                    <li key={member._id}>
                        {member.first_name} - {member.domain}
                    </li>
                ))}
            </ul>
            <Link to="/" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                Back to Users
            </Link>
        </div>
    );
};

export default TeamDetails;
