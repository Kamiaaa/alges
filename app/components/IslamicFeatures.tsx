// components/IslamicFeatures.tsx
'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { MdOutlinePhoneForwarded, MdOutlineFlight, MdOutlineHotel, MdOutlineDirectionsCar } from "react-icons/md";
import { IoCarOutline, IoFlashOutline, IoBuildOutline, IoCloudDownloadOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { FaMosque, FaQuran, FaHandsHelping, FaUsers, FaBook, FaGlobe, FaChild, FaStar, FaHeart, FaUserPlus, FaEnvelope } from "react-icons/fa";

const IslamicFeatures = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleJoinCommunityClick = () => {
        window.location.href = '/join';
    };

    const handleContactClick = () => {
        window.location.href = '/contact';
    };

    return (
        <section
            ref={containerRef}
            className="relative w-full h-auto min-h-600 overflow-hidden bg-fixed bg-center bg-cover bg-no-repeat py-16"
            style={{ backgroundImage: "url('/img/slide-01.jpg')" }}
        >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8 lg:px-16 space-y-8">
                {/* Top Tagline */}
                <div className="z-10">
                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bail font-bold text-white max-w-5xl z-10 leading-tight">
                        Not just a community. A spiritual home.
                    </p>
                </div>

                {/* Main Heading */}
                <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl text-white max-w-5xl z-10 leading-tight">
                    Building bridges of faith, knowledge, and service — nurturing hearts and minds for generations to come.
                </h2>

                {/* Features Grid - 4 column layout from design */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 z-10 max-w-6xl mx-auto w-full">
                    {/* Prayer & Worship */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-left border border-white/20 hover:bg-white/15 transition-all duration-300">
                        <div className="bg-green-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                            <FaMosque className="text-green-400 text-2xl" />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">Prayer & Worship</h3>
                        <p className="text-white/70 text-sm">
                            Daily prayers, Jumu'ah services, Taraweeh, and spiritual gatherings in a welcoming environment.
                        </p>
                    </div>

                    {/* Quran & Education */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-left border border-white/20 hover:bg-white/15 transition-all duration-300">
                        <div className="bg-green-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                            <FaQuran className="text-green-400 text-2xl" />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">Quran & Education</h3>
                        <p className="text-white/70 text-sm">
                            Quranic studies, Tajweed classes, Islamic history, and Arabic language courses for all ages.
                        </p>
                    </div>

                    {/* Community Service */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-left border border-white/20 hover:bg-white/15 transition-all duration-300">
                        <div className="bg-green-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                            <FaHandsHelping className="text-green-400 text-2xl" />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">Community Service</h3>
                        <p className="text-white/70 text-sm">
                            Food drives, charity programs, youth mentorship, and supporting families in need.
                        </p>
                    </div>

                    {/* Social & Cultural */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-left border border-white/20 hover:bg-white/15 transition-all duration-300">
                        <div className="bg-green-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                            <FaUsers className="text-green-400 text-2xl" />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">Social & Cultural</h3>
                        <p className="text-white/70 text-sm">
                            Community iftars, Eid celebrations, interfaith dialogues, and family-friendly events.
                        </p>
                    </div>
                </div>

                {/* Optional Second Row for Additional Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 z-10 max-w-6xl mx-auto w-full">
                    {/* Youth Programs */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-left border border-white/20 hover:bg-white/15 transition-all duration-300">
                        <div className="bg-green-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                            <FaChild className="text-green-400 text-2xl" />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">Youth Programs</h3>
                        <p className="text-white/70 text-sm">
                            Weekend schools, leadership training, sports activities, and summer camps for youth development.
                        </p>
                    </div>

                    {/* Outreach & Dawah */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-left border border-white/20 hover:bg-white/15 transition-all duration-300">
                        <div className="bg-green-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                            <FaGlobe className="text-green-400 text-2xl" />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">Outreach & Dawah</h3>
                        <p className="text-white/70 text-sm">
                            Educational workshops, interfaith events, and sharing the beauty of Islam with neighbors.
                        </p>
                    </div>

                    {/* Counseling & Support */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-left border border-white/20 hover:bg-white/15 transition-all duration-300">
                        <div className="bg-green-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                            <FaBook className="text-green-400 text-2xl" />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">Counseling & Support</h3>
                        <p className="text-white/70 text-sm">
                            Marriage guidance, family counseling, and spiritual advice from qualified scholars.
                        </p>
                    </div>

                    {/* Membership Benefits */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-left border border-white/20 hover:bg-white/15 transition-all duration-300">
                        <div className="bg-green-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                            <FaStar className="text-green-400 text-2xl" />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">Membership Benefits</h3>
                        <p className="text-white/70 text-sm">
                            Program discounts, library access, event priority, and community connections.
                        </p>
                    </div>
                </div>

                {/* Call to Action Buttons - Updated design matching DonatePromo.tsx */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8 z-10 justify-center">
                    {/* JOIN COMMUNITY Button - Primary (Green) */}
                    <button
                        onClick={handleJoinCommunityClick}
                        className="relative overflow-hidden bg-green-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group flex items-center justify-center gap-2"
                        aria-label="Join Our Community"
                    >
                        <FaUserPlus className="text-xl relative z-10" />
                        <span className="relative z-10">Join Our Community</span>
                        <span className="absolute inset-0 bg-green-700 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
                    </button>

                    {/* CONTACT US Button - Secondary (White outline) */}
                    <button
                        onClick={handleContactClick}
                        className="relative overflow-hidden bg-transparent border-2 border-green-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group flex items-center justify-center gap-2"
                        aria-label="Contact Us"
                    >
                        <FaEnvelope className="text-xl relative z-10" />
                        <span className="relative z-10">Contact Us</span>
                        <span className="absolute inset-0 bg-green-600 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
                    </button>
                </div>
            </div>

            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/70 z-0" />
        </section>
    );
};

export default IslamicFeatures;