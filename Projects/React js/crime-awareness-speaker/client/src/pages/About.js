import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.div
            className="page-container"
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 50 }}
        >
            <h1>About the Speaker</h1>
            <div className="about-content">
                <img src="https://via.placeholder.com/400" alt="Speaker" className="about-img" />
                <div className="about-text">
                    <p>
                        Our mission is to educate and empower individuals to protect themselves and their communities.
                        With over 15 years of experience in law enforcement and public safety, we bring real-world insights
                        to every session.
                    </p>
                    <p>
                        We cover topics ranging from cybercrime, personal safety, neighborhood watch programs,
                        to understanding criminal psychology.
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default About;
