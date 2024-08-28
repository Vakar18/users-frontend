import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import TeamPage from './components/pages/TeamPage';
import './App.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/team/:id" element={<TeamPage />} />
            </Routes>
        </Router>
    );
};

export default App;
