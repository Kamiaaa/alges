// components/DonatePromo.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlinePhoneForwarded, MdOutlineEmail } from 'react-icons/md';
import { FaHandsHelping, FaHeart, FaMosque, FaQuran } from 'react-icons/fa';
// Or use any other icon library - alternatively you can use a simple emoji or text

interface DonatePromoProps {
    backgroundImage?: string;
    overlayOpacity?: number;
    className?: string;
    onLearnMore?: () => void;
    onDonateNow?: () => void;
    onContactUs?: () => void;
}

const DonatePromo: React.FC<DonatePromoProps> = ({
    backgroundImage = 'https://plus.unsplash.com/premium_photo-1677587536653-0d02efbb70ee?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Islamic architecture/mosque
    overlayOpacity = 0.6,
    className = '',
    onLearnMore,
    onDonateNow,
    onContactUs
}) => {
    return (
        <div className={`relative min-h-screen flex items-center justify-center p-6 overflow-hidden ${className}`}>
            {/* Background Image with Next.js Image optimization */}
            <Image
                src={backgroundImage}
                alt="Islamic Cultural Association background"
                fill
                className="object-cover"
                priority
                quality={100}
            />

            {/* Dark overlay with customizable opacity */}
            <div
                className="absolute inset-0 bg-black"
                style={{ opacity: overlayOpacity }}
            ></div>

            {/* Main container */}
            <div className="relative max-w-4xl mx-auto text-center z-10">
                {/* Association Logo/Brand */}
                <div className="mb-4">
                    <FaMosque className="text-green-400 text-6xl md:text-7xl mx-auto mb-2" />
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bail tracking-tighter text-white mb-4">
                        Give Sadaqah.
                        <span className="block text-green-400">Change Lives.</span>
                    </h1>
                </div>

                {/* Tagline/Body text */}
                <div className="space-y-3 text-white text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
                    <p>
                        Your contribution nourishes souls, educates minds, and builds a stronger Ummah. Support our masjid, Quran programs, community iftars, and humanitarian aid initiatives.
                    </p>
                    <p className="text-green-300 text-sm italic">
                        "The example of those who spend their wealth in the way of Allah is like a seed of grain which grows seven spikes; in each spike is a hundred grains." — Quran 2:261
                    </p>
                </div>

                {/* Donation Options Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                    {/* Zakat */}
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                        <h3 className="text-green-400 font-bold text-lg mb-2">Zakat</h3>
                        <p className="text-white/80 text-sm">Fulfill your obligatory charity with confidence</p>
                    </div>
                    
                    {/* Sadaqah */}
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                        <h3 className="text-green-400 font-bold text-lg mb-2">Sadaqah</h3>
                        <p className="text-white/80 text-sm">Voluntary charity for ongoing rewards</p>
                    </div>
                    
                    {/* Waqf */}
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                        <h3 className="text-green-400 font-bold text-lg mb-2">Waqf</h3>
                        <p className="text-white/80 text-sm">Endowment for sustainable community impact</p>
                    </div>
                </div>

                {/* Buttons with the specified design */}
                <div className="flex flex-col sm:flex-row gap-4 z-10 justify-center">
                    {/* LEARN MORE Button */}
                    <button
                        onClick={onLearnMore}
                        className="relative overflow-hidden bg-green-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group flex items-center justify-center gap-2"
                        aria-label="Learn More About Our Programs"
                    >
                        <FaHandsHelping className="text-xl relative z-10" />
                        <span className="relative z-10">Learn More</span>
                        <span className="absolute inset-0 bg-green-700 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
                    </button>

                    {/* DONATE NOW Button */}
                    <button
                        onClick={onDonateNow}
                        className="relative overflow-hidden bg-white text-green-700 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group flex items-center justify-center gap-2"
                        aria-label="Donate Now"
                    >
                        <FaHeart className="text-xl relative z-10 text-green-600" />
                        <span className="relative z-10">Donate Now</span>
                        <span className="absolute inset-0 bg-green-50 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
                    </button>

                    {/* CONTACT US Button */}
                    <button
                        onClick={onContactUs}
                        className="relative overflow-hidden bg-transparent border-2 border-green-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group flex items-center justify-center gap-2"
                        aria-label="Contact Us"
                    >
                        <MdOutlineEmail className="text-xl relative z-10" />
                        <span className="relative z-10">Contact Us</span>
                        <span className="absolute inset-0 bg-green-600 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
                    </button>
                </div>

                {/* Optional: Phone Number for Donation Inquiries */}
                <div className="mt-8 text-white/80 text-sm">
                    <p className="flex items-center justify-center gap-2">
                        <MdOutlinePhoneForwarded className="text-green-400" />
                        <span>For donation inquiries: +880123456789</span>
                    </p>
                    <p className="mt-2 text-green-300/80 text-xs">
                        Tax receipts available for all donations
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DonatePromo;