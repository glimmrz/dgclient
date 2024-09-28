import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../assets/css/LanguageSwitcher.css'; // Import CSS for styling

const LanguageSwitcher = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN'); // Default language

  const languages = [
    { code: 'EN', label: 'English', url: '/' },
    { code: 'FR', label: 'French', url: '/fr' },
    // Add more languages with corresponding URLs as needed
  ];

  useEffect(() => {
    // Determine the current language based on the URL path
    const currentPath = location.pathname;
    const currentLanguage = languages.find(lang => lang.url === currentPath)?.code || 'EN';
    setSelectedLanguage(currentLanguage);
  }, [location.pathname]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (url) => {
    setIsOpen(false);
    window.location.href = url; // Redirect to the selected language URL
  };

  return (
    <div className="language-switcher">
      <button onClick={toggleDropdown} className="language-button">
        {selectedLanguage} <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <ul className="language-dropdown">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => selectLanguage(lang.url)}
              className={`language-option ${lang.code === selectedLanguage ? 'active' : ''}`}
            >
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
