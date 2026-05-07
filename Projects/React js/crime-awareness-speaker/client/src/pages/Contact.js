import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('/api/contact', formData);
            setStatus('Your message has been sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            console.error(err);
            setStatus('Something went wrong. Please try again.');
        }
    };

    return (
        <motion.div
            className="page-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <h1>Contact Us</h1>
            <div className="auth-form-container">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" value={formData.name} onChange={onChange} required />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" value={formData.email} onChange={onChange} required />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea name="message" value={formData.message} onChange={onChange} rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn-primary">Send Message</button>
                    {status && <p style={{ marginTop: '1rem', color: status.includes('success') ? 'green' : 'red' }}>{status}</p>}
                </form>
            </div>
        </motion.div>
    );
};

export default Contact;
