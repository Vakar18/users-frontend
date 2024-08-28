import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../components/redux/slices/userSlice';
import UserCard from './UserCard';
import Pagination from './Pagination';

const UserList = ({ onAddMember }) => {
    const dispatch = useDispatch();
    const { users, currentPage, totalPages } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers({ page: currentPage, search: '', filters: {} }));
    }, [dispatch, currentPage]);

    return (
        <>
            <div className="user-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {users.map((user) => (
                    <UserCard key={user._id} user={user} onAddMember={onAddMember} />
                ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} />
        </>
    );
};

export default UserList;
