import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';

function Header({ isAuthenticated, setIsAuthenticated }) {
    const navigate = useNavigate();
    const navRef = useRef(null);
    const logoRef = useRef(null);
    const linkRefs = useRef([]);
    linkRefs.current = [];

    useEffect(() => {
        const navElement = navRef.current;
        const logoElement = logoRef.current;
        const links = linkRefs.current;

        gsap.fromTo(
            navElement,
            { opacity: 0, y: -30 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
        );

        gsap.fromTo(
            logoElement,
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, duration: 0.6, delay: 0.2, ease: 'power2.out' }
        );

        links.forEach((link, index) => {
            gsap.fromTo(
                link,
                { opacity: 0, y: -10 },
                { opacity: 1, y: 0, duration: 0.5, delay: 0.4 + index * 0.1, ease: 'power2.out' }
            );
        });
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        setIsAuthenticated(false);
        navigate('/login');
    };

    const addToLinkRefs = (el) => {
        if (el && !linkRefs.current.includes(el)) {
            linkRefs.current.push(el);
        }
    };

    return (
        <nav ref={navRef} className="bg-white bg-opacity-95 backdrop-blur-md shadow-lg py-5">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center">

                <div className="flex items-center">
                    <Link to="/" className="flex items-center">
                        <img ref={logoRef} src="/image/logo.webp" alt="Luxsriyas Logo" className="h-12 w-auto transition-transform duration-300 hover:scale-105" />
                        <span className="text-xl font-extrabold text-gray-800 ml-3 tracking-tight">The Cloth Bazaar</span>
                    </Link>
                </div>

                <div className="flex space-x-8 items-center">
                    <Link ref={addToLinkRefs} className="text-gray-700 font-semibold hover:text-indigo-500 transition-colors duration-300" to="/">Home</Link>
                    <Link ref={addToLinkRefs} className="text-gray-700 font-semibold hover:text-indigo-500 transition-colors duration-300" to="/mycard">My Bag</Link>
                    <Link ref={addToLinkRefs} className="text-gray-700 font-semibold hover:text-indigo-500 transition-colors duration-300" to="/about">About</Link>
                    <Link ref={addToLinkRefs} className="text-gray-700 font-semibold hover:text-indigo-500 transition-colors duration-300" to="/contact">Contact</Link>

                    {!isAuthenticated ? (
                        <>
                            <Link ref={addToLinkRefs} className="text-gray-700 font-semibold hover:text-indigo-500 transition-colors duration-300" to="/login">Sign In</Link>
                            <Link ref={addToLinkRefs} className="bg-indigo-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-indigo-600 transition-colors duration-300" to="/signup">Register</Link>
                        </>
                    ) : (
                        <button
                            className="text-gray-700 font-semibold hover:text-indigo-500 transition-colors duration-300 focus:outline-none"
                            onClick={handleLogout}
                        >
                            Sign Out
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Header;