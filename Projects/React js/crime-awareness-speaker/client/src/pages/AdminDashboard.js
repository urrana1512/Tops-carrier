import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const AdminDashboard = () => {
    const [inquiries, setInquiries] = useState([]);
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) return navigate('/login'); // Basic protection

                // In a real app, send token in headers
                // axios.defaults.headers.common['x-auth-token'] = token; 

                // For now assuming public or simple check
                const inqRes = await axios.get('/api/contact');
                setInquiries(inqRes.data);

                const userRes = await axios.get('/api/users');
                setUsers(userRes.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, [navigate]);

    return (
        <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <h1>Admin Dashboard</h1>

            <section style={{ marginBottom: '2rem' }}>
                <h2>Recent Inquiries</h2>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
                        <thead>
                            <tr style={{ background: '#457b9d', color: 'white' }}>
                                <th style={{ padding: '10px' }}>Name</th>
                                <th style={{ padding: '10px' }}>Email</th>
                                <th style={{ padding: '10px' }}>Message</th>
                                <th style={{ padding: '10px' }}>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inquiries.map(inq => (
                                <tr key={inq._id} style={{ borderBottom: '1px solid #ddd' }}>
                                    <td style={{ padding: '10px' }}>{inq.name}</td>
                                    <td style={{ padding: '10px' }}>{inq.email}</td>
                                    <td style={{ padding: '10px' }}>{inq.message}</td>
                                    <td style={{ padding: '10px' }}>{new Date(inq.createdAt).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section>
                <h2>Registered Users</h2>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
                        <thead>
                            <tr style={{ background: '#e63946', color: 'white' }}>
                                <th style={{ padding: '10px' }}>Name</th>
                                <th style={{ padding: '10px' }}>Email</th>
                                <th style={{ padding: '10px' }}>Admin</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user._id} style={{ borderBottom: '1px solid #ddd' }}>
                                    <td style={{ padding: '10px' }}>{user.name}</td>
                                    <td style={{ padding: '10px' }}>{user.email}</td>
                                    <td style={{ padding: '10px' }}>{user.isAdmin ? 'Yes' : 'No'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </motion.div>
    );
};

export default AdminDashboard;
