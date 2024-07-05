"use client"
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignupPage = () => {
    const [name, setName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/signup', {
                name,
                email: newEmail,
                password: newPassword
            });

            console.log('Signup successful:', response.data);
            // Redirect or handle success
        } catch (error) {
            console.error('Signup error:', error);
            // Handle error
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                <form onSubmit={handleSignup}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Name:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email:</label>
                        <input type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Password:</label>
                        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                    </div>
                    <div className="mb-4">
                        <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Sign Up</button>
                    </div>
                </form>
                <p className="text-sm text-gray-600">
                    Already have an account? <Link to="/login" className="text-indigo-500 hover:text-indigo-600">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignupPage;
