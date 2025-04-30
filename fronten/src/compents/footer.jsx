import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaPinterestP
} from 'react-icons/fa';
import { FaLinkedinIn } from "react-icons/fa";
import gsap from 'gsap';

function Footer() {
    const footerRef = useRef(null);
    const headingRef = useRef(null);
    const linkRefs = useRef([]);
    const socialIconRefs = useRef([]);
    linkRefs.current = [];
    socialIconRefs.current = [];

    useEffect(() => {
        const footerElement = footerRef.current;
        const headingElement = headingRef.current;
        const links = linkRefs.current;
        const socialIcons = socialIconRefs.current;

        gsap.fromTo(
            footerElement,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: footerElement, start: 'top bottom-=100' } }
        );

        gsap.fromTo(
            headingElement,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.6, delay: 0.2, ease: 'power3.out', scrollTrigger: { trigger: footerElement, start: 'top bottom-=100' } }
        );

        links.forEach((link, index) => {
            gsap.fromTo(
                link,
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.5, delay: 0.4 + index * 0.1, ease: 'power2.out', scrollTrigger: { trigger: footerElement, start: 'top bottom-=100' } }
            );
        });

        socialIcons.forEach((icon, index) => {
            gsap.fromTo(
                icon,
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 0.4, delay: 0.6 + index * 0.1, ease: 'back.out(1.2)', scrollTrigger: { trigger: footerElement, start: 'top bottom-=100' } }
            );
        });
    }, []);

    const addToLinkRefs = (el) => {
        if (el && !linkRefs.current.includes(el)) {
            linkRefs.current.push(el);
        }
    };

    const addToSocialIconRefs = (el) => {
        if (el && !socialIconRefs.current.includes(el)) {
            socialIconRefs.current.push(el);
        }
    };

    return (
        <footer ref={footerRef} className="bg-gray-900 text-gray-300 py-16">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    <div>
                        <h2 ref={headingRef} className="text-2xl font-extrabold text-indigo-500 mb-6 tracking-tight">The Cloth Bazaar</h2>
                        <p className="text-md leading-relaxed text-gray-400">
                            Indulge in a curated collection of exquisite apparel. We champion sustainable practices, offering sophisticated and accessible styles for every facet of your life.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-5 tracking-wider uppercase">Explore</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/" className="hover:text-indigo-300 transition-colors duration-300" ref={addToLinkRefs}>Home</Link></li>
                            <li><Link to="/about" className="hover:text-indigo-300 transition-colors duration-300" ref={addToLinkRefs}>About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-indigo-300 transition-colors duration-300" ref={addToLinkRefs}>Contact</Link></li>
                            <li><Link to="/mycard" className="hover:text-indigo-300 transition-colors duration-300" ref={addToLinkRefs}>My Bag</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-5 tracking-wider uppercase">Policies</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/privacy" className="hover:text-indigo-300 transition-colors duration-300" ref={addToLinkRefs}>Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-indigo-300 transition-colors duration-300" ref={addToLinkRefs}>Terms & Conditions</Link></li>
                            <li><Link to="/refund" className="hover:text-indigo-300 transition-colors duration-300" ref={addToLinkRefs}>Refund Policy</Link></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-5 tracking-wider uppercase">Connect</h3>
                        <div className="flex space-x-5 text-xl">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition-colors duration-300" ref={addToSocialIconRefs}>
                                <FaFacebookF />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition-colors duration-300" ref={addToSocialIconRefs}>
                                <FaTwitter />
                            </a>
                            <a href="https://www.instagram.com/darshan._.3690" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition-colors duration-300" ref={addToSocialIconRefs}>
                                <FaInstagram />
                            </a>
                            <a
                                href="www.linkedin.com/in/darshan-rajput-4b0b23288"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-indigo-300 transition-colors duration-300"
                                ref={addToSocialIconRefs}
                            >
                                <FaLinkedinIn />
                            </a>
                            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition-colors duration-300" ref={addToSocialIconRefs}>
                                <FaPinterestP />
                            </a>
                        </div>
                    </div>
                </div>


                <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} The Cloth Bazaar. Crafted with care in Rajkot. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;