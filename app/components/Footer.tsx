// app/components/Footer.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// React Icons
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import { 
  MdPhone, 
  MdEmail, 
  MdLocationOn, 
  MdAccessTime,
  MdChevronRight,
  MdCalendarToday,
  MdPeople,
  MdDescription,
  MdSchool,
  MdVolunteerActivism,
  MdHelpCenter
} from 'react-icons/md';
import { 
  FaMosque, 
  FaQuran, 
  FaHandsHelping, 
  FaHeart, 
  FaStar, 
  FaMoon,
  FaSun,
  FaChild,
  FaUserGraduate
} from 'react-icons/fa';

const Footer = () => {
  const pathname = usePathname();

  // Quick links data
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Mosque', href: '/mosque' },
    { name: 'Prayer Times', href: '/prayer-times' },
    { name: 'Events Calendar', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
  ];

  const servicesLinks = [
    { name: 'Quran Classes', href: '/services/quran-classes', icon: <FaQuran className="w-4 h-4" /> },
    { name: 'Islamic Education', href: '/services/education', icon: <MdSchool className="w-4 h-4" /> },
    { name: 'Youth Programs', href: '/services/youth', icon: <FaChild className="w-4 h-4" /> },
    { name: 'Community Support', href: '/services/community-support', icon: <MdVolunteerActivism className="w-4 h-4" /> },
    { name: 'Marriage Services', href: '/services/marriage', icon: <FaHeart className="w-4 h-4" /> },
    { name: 'Counseling', href: '/services/counseling', icon: <MdHelpCenter className="w-4 h-4" /> },
  ];

  const contactInfo = [
    { icon: <MdPhone className="w-5 h-5" />, label: 'Phone', value: '+880 1234-567890', link: 'tel:+8801234567890' },
    { icon: <MdEmail className="w-5 h-5" />, label: 'Email', value: 'info@islamiccultural.org', link: 'mailto:info@islamiccultural.org' },
    { icon: <MdLocationOn className="w-5 h-5" />, label: 'Address', value: 'House 1, Road 2, Sector 3, Uttara, Dhaka-1230', link: null },
    { icon: <MdAccessTime className="w-5 h-5" />, label: 'Office Hours', value: 'Sat - Thu: 9:00 AM - 8:00 PM', link: null },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <FaFacebook className="w-5 h-5" />, href: 'https://facebook.com', color: 'hover:bg-[#1877f2]' },
    { name: 'Twitter', icon: <FaTwitter className="w-5 h-5" />, href: 'https://twitter.com', color: 'hover:bg-[#1da1f2]' },
    { name: 'Instagram', icon: <FaInstagram className="w-5 h-5" />, href: 'https://instagram.com', color: 'hover:bg-[#e4405f]' },
    { name: 'LinkedIn', icon: <FaLinkedin className="w-5 h-5" />, href: 'https://linkedin.com', color: 'hover:bg-[#0a66c2]' },
    { name: 'YouTube', icon: <FaYoutube className="w-5 h-5" />, href: 'https://youtube.com', color: 'hover:bg-[#ff0000]' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16 pb-8">
        {/* Top Section with Logo and Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Association Info Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group">
              <div className="relative w-48 h-24">
                <Image
                  src="/img/logo.png"
                  alt="Islamic Cultural Association of Bangladesh"
                  fill
                  loading="eager"
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Islamic Cultural Association of Bangladesh is dedicated to promoting Islamic values, 
              education, and community service. Serving the Ummah since 1985 with faith, knowledge, and compassion.
            </p>
            {/* Islamic Quote */}
            <p className="text-emerald-400 text-xs italic border-l-2 border-emerald-500 pl-3">
              "The best among you are those who benefit others." — Prophet Muhammad (PBUH)
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-emerald-500 rounded-full"></span>
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`
                      flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-all duration-200 group
                      ${pathname === link.href ? 'text-emerald-400' : ''}
                    `}
                  >
                    <MdChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Programs Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Programs & Services
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-emerald-500 rounded-full"></span>
            </h3>
            <ul className="space-y-2">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors group"
                  >
                    <span className="text-emerald-500/60 group-hover:text-emerald-400">
                      {link.icon}
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Contact Info
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-emerald-500 rounded-full"></span>
            </h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="text-emerald-500 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    {item.link ? (
                      <a 
                        href={item.link}
                        className="text-gray-300 hover:text-emerald-400 transition-colors text-sm block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-gray-300 text-sm block">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Donation Banner */}
        <div className="my-8 bg-gradient-to-r from-emerald-800/50 to-teal-800/50 rounded-lg p-4 border border-emerald-700/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <FaHandsHelping className="text-emerald-400 text-2xl" />
              <div>
                <h4 className="font-semibold text-white">Support Your Community</h4>
                <p className="text-gray-300 text-sm">Your donations help us serve the Ummah better</p>
              </div>
            </div>
            <Link 
              href="/donate"
              className="bg-emerald-600 hover:bg-emerald-700 px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
            >
              <FaHeart className="w-4 h-4" />
              Donate Now
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-emerald-800/50 my-8 lg:my-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-gray-400 text-sm text-center md:text-left">
            &copy; {currentYear} Islamic Cultural Association of Bangladesh. All rights reserved.
          </div>

          {/* Prayer Times Quick Info */}
          <div className="flex items-center gap-3 text-gray-400 text-xs">
            <span className="flex items-center gap-1">
              <FaMoon className="w-3 h-3" />
              Maghrib: 5:32 PM
            </span>
            <span className="w-px h-3 bg-emerald-800"></span>
            <span className="flex items-center gap-1">
              <FaSun className="w-3 h-3" />
              Fajr: 5:00 AM
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  p-2 rounded-full bg-emerald-800/30 text-gray-300 transition-all duration-200
                  ${social.color} hover:text-white hover:scale-110
                `}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Trust & Association Badges */}
          <div className="flex items-center gap-2 text-gray-500 text-xs">
            <span className="flex items-center gap-1">
              <FaStar className="w-3.5 h-3.5 text-emerald-500" />
              Registered Charity
            </span>
            <span className="w-px h-3 bg-emerald-800"></span>
            <span className="flex items-center gap-1">
              <FaMosque className="w-3.5 h-3.5 text-emerald-500" />
              Non-Profit
            </span>
            <span className="w-px h-3 bg-emerald-800"></span>
            <span className="flex items-center gap-1">
              <MdPeople className="w-3.5 h-3.5 text-emerald-500" />
              Zakat Eligible
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;