import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/login', formData);
            localStorage.setItem('token', res.data.token);
            // Simple admin check
            if (res.data.user.isAdmin) {
                navigate('/admin');
            } else {
                navigate('/');
            }
        } catch (err) {
            console.error(err);
            alert('Invalid Credentials');
        }
    };

    return (
        <motion.div
            className="page-container"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
        >
            <div className="auth-form-container">
                <h2>Login</h2>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" value={formData.email} onChange={onChange} required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" value={formData.password} onChange={onChange} required />
                    </div>
                    <button type="submit" className="btn-primary" style={{ width: '100%' }}>Login</button>
                </form>
                <p style={{ marginTop: '1rem' }}>
                    Don't have an account? <Link to="/signup" style={{ color: 'var(--primary-color)' }}>Sign Up</Link>
                </p>
            </div>
        </motion.div>
    );
};

export default Login;
