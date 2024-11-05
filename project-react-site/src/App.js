// src/App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import './css/App.css';
import './css/Common.css';
import AboutPage from './pages/AboutPage';
import ActivitiesPage from './pages/ActivitiesPage';
import DiscoverPage from './pages/DiscoverPage';
import HomePage from './pages/HomePage';
import MunchiesPage from './pages/MunchiesPage';

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <main className="content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/discover" element={<DiscoverPage />} />
                    <Route path="/activities" element={<ActivitiesPage />} />
                    <Route path="/munchies" element={<MunchiesPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
