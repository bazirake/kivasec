'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import log from "../Images/kivasec-ogo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';

// ✅ Import shared routes
import { allRoutes } from './DynamicRoutes';

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [showLangMenu, setShowLangMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleLangMenu = () => setShowLangMenu(!showLangMenu);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setShowLangMenu(false);
    // You could also trigger i18n here later if you use react-i18next
  };

  const languages = [
    { code: 'EN', name: 'English', flag: '🇬🇧' },
    { code: 'FR', name: 'Français', flag: '🇫🇷' },
    { code: 'RW', name: 'Kinyarwanda', flag: '🇷🇼' },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-custom position-relative">
      <div className="container-fluid px-4 px-md-5 py-1">
        {/* Logo & Brand */}
        <div className="d-flex align-items-center">
          <div className="logo-container me-3">
            <img
              src={log}
              alt="Kivasec cyber Logo"
              className="img-fluid"
              style={{ maxHeight: '40px' }}
            />
          </div>
          <div>
            <div className="brand-text">Kivasec</div>
            <div className="brand-subtext">cyber</div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-4 align-items-center">
            {allRoutes.map((route) => (
              <motion.li
                key={route.menu_id}
                className={`nav-item ${
                  location.pathname === route.url ? 'active' : ''
                }`}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Link
                  className="nav-link nav-link-custom px-3"
                  to={route.url}
                >
                  {route.name}
                </Link>
              </motion.li>
            ))}

            {/* 🌐 Language Selector */}
            <li className="nav-item dropdown position-relative">
              <button
                onClick={toggleLangMenu}
                className="btn btn-sm btn-outline-info d-flex align-items-center gap-2"
                style={{ borderRadius: '20px' }}
              >
                <Globe size={16} />
                {language}
              </button>

              {showLangMenu && (
                <motion.ul
                  className="dropdown-menu show p-2"
                  style={{
                    position: 'absolute',
                    top: '110%',
                    right: 0,
                    backgroundColor: '#0f172a',
                    border: '1px solid #334155',
                    borderRadius: '8px',
                  }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {languages.map((lang) => (
                    <li key={lang.code}>
                      <button
                        className="dropdown-item text-light d-flex align-items-center gap-2"
                        style={{ background: 'transparent' }}
                        onClick={() => handleLanguageChange(lang.code)}
                      >
                        <span>{lang.flag}</span> {lang.name}
                      </button>
                    </li>
                  ))}
                </motion.ul>
              )}
            </li>
          </ul>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler border-0 p-0 d-lg-none"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {menuOpen ? (
            <X size={26} className="text-gray-300" />
          ) : (
            <Menu size={26} className="text-gray-300" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="mobile-menu position-absolute start-0 end-0 top-100 z-50 shadow-lg"
        >
          <ul className="navbar-nav text-center py-4 px-3">
            {allRoutes.map((route) => (
              <motion.li
                key={route.menu_id}
                className="nav-item mb-3"
                whileHover={{ scale: 1.05 }}
                onClick={() => setMenuOpen(false)}
              >
                <Link
                  className="nav-link nav-link-custom d-inline-block"
                  to={route.url}
                >
                  {route.name}
                </Link>
              </motion.li>
            ))}

            {/* 🌐 Language selector in mobile menu */}
            <li className="nav-item mt-3">
              <div className="d-flex justify-content-center">
                <select
                  className="form-select w-auto bg-dark text-light border-secondary"
                  value={language}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.flag} {lang.name}
                    </option>
                  ))}
                </select>
              </div>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default NavBar;
