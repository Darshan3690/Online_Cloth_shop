import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { handleError, handleSuccess } from '../utils';
import gsap from 'gsap';

function Signup() {
    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    // GSAP animation for the background
    useEffect(() => {
        gsap.to('.bg-gradient-animation', {
            backgroundPosition: '400% 0%',
            duration: 10,
            ease: 'linear',
            repeat: -1,
        });

        // GSAP animation for the signup container entrance
        gsap.fromTo('.signup-container',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
        );

        // GSAP animation for the heading
        gsap.fromTo('h1',
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.6, delay: 0.2, ease: 'power3.out' }
        );

        // GSAP animation for form elements
        gsap.fromTo('.form-element',
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.5, delay: 0.4, stagger: 0.1, ease: 'power2.out' }
        );

        // GSAP animation for the signup button
        gsap.fromTo('.signup-button',
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 0.4, delay: 0.6, ease: 'back.out(1.2)' }
        );

        // GSAP animation for the login link
        gsap.fromTo('.login-link',
            { opacity: 0 },
            { opacity: 1, duration: 0.4, delay: 0.8, ease: 'power2.out' }
        );
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupInfo(prev => ({ ...prev, [name]: value }));
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, email, password } = signupInfo;

        if (!name || !email || !password) {
            return handleError('Name, email, and password are required');
        }

        try {
            const url = `http://localhost:5000/auth/signup`; // ✅ local server during development
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupInfo)
            });

            const result = await response.json();
            const { success, message } = result;

            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
            } else {
                handleError(message || "Signup failed");
            }
        } catch (err) {
            handleError(err.message || "Something went wrong");
        }
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-black bg-gradient-animation bg-[200%_100%]">
            {/* Decorative blurred circles */}
            <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-purple-400 opacity-20 blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-56 h-56 rounded-full bg-blue-500 opacity-20 blur-xl animate-pulse delay-1000"></div>

            <div className="signup-container w-full max-w-md bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-2xl p-10 border border-gray-200">
                <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-8 tracking-tight">
                    <span className="text-indigo-600">Luxsriyas</span> Signup
                </h1>
                <form onSubmit={handleSignup} className="space-y-6">
                    <div className="form-element">
                        <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-2">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autoFocus
                            value={signupInfo.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="form-element">
                        <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={signupInfo.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="form-element">
                        <label htmlFor="password" className="block text-lg font-semibold text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={signupInfo.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        className="signup-button w-full bg-indigo-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 font-semibold transition-colors duration-300"
                    >
                        Create Account
                    </button>
                </form>
                <p className="mt-6 text-center text-gray-600 text-sm login-link">
                    Already have an account?{' '}
                    <Link to="/login" className="font-semibold text-indigo-600 hover:underline">
                        Log In
                    </Link>
                </p>
            </div>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </div>
    );
}

export default Signup;