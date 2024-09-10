// src/components/ThemeSwitcher.js
import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const ThemeToggler = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
    onClick={toggleDarkMode}
    className={`fixed top-4 right-4 w-14 h-7 flex items-center rounded-full p-1 duration-300 ease-in-out
      ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}
  >
    <div
      className={`w-6 h-6 bg-white py-1 rounded-full shadow-md transform duration-300 ease-in-out
      ${darkMode ? 'translate-x-7' : 'translate-x-0'}`}
    >
      {darkMode ? <MoonIcon className="w-4 h-4 text-gray-900" /> : <SunIcon className="w-4 h-4 text-yellow-500" />}
    </div>
  </button>
  );
};

export default ThemeToggler;