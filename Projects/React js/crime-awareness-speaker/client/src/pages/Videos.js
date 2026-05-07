import React from 'react';
import { motion } from 'framer-motion';

const Videos = () => {
    return (
        <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <h1>Educational Videos</h1>
            <div className="video-grid">
                {/* Placeholders for video content */}
                <div className="video-card">
                    <div className="video-thumbnail">Video 1</div>
                    <h3>Cyber Safety Basics</h3>
                </div>
                <div className="video-card">
                    <div className="video-thumbnail">Video 2</div>
                    <h3>Home Security Tips</h3>
                </div>
                <div className="video-card">
                    <div className="video-thumbnail">Video 3</div>
                    <h3>Self Defense 101</h3>
                </div>
            </div>
        </motion.div>
    );
};

export default Videos;
