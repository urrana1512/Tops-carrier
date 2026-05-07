import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="home-container"
        >
            <section className="hero-section">
                <motion.h1
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    transition={{ type: 'spring', stiffness: 120 }}
                >
                    Crime Awareness Speaker
                </motion.h1>
                <p>Empowering communities through knowledge and vigilance.</p>
                <Link to="/contact">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="btn-primary"
                    >
                        Book a Session
                    </motion.button>
                </Link>
            </section>

            <section className="feature-section page-container">
                <h2>Why Awareness Matters</h2>
                <div className="cards-wrapper">
                    <div className="card">
                        <i className="fas fa-shield-alt"></i>
                        <h3>Prevention</h3>
                        <p>Learn how to prevent crime before it happens.</p>
                    </div>
                    <div className="card">
                        <i className="fas fa-user-secret"></i>
                        <h3>Safety</h3>
                        <p>Personal safety tips for you and your family.</p>
                    </div>
                    <div className="card">
                        <i className="fas fa-gavel"></i>
                        <h3>Justice</h3>
                        <p>Understanding the legal system and your rights.</p>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Home;
