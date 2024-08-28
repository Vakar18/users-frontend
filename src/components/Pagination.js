import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../components/redux/slices/userSlice';

const Pagination = ({ currentPage, totalPages }) => {
    const dispatch = useDispatch();

    const goToPage = (page) => {
        dispatch(fetchUsers({ page, search: '', filters: {} }));
    };

    return (
        <div className="pagination flex justify-center space-x-2 mt-4">
            <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded font-bold text-white transition-colors duration-300 ${
                    currentPage === 1
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700'
                }`}
            >
                Previous
            </button>
            <span className="px-4 py-2 text-lg font-semibold text-gray-800">
                Page {currentPage} of {totalPages}
            </span>
            <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded font-bold text-white transition-colors duration-300 ${
                    currentPage === totalPages
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700'
                }`}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
