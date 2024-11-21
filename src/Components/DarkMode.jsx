import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    // Initialize theme from localStorage
    return localStorage.getItem("mode") || "dark";
  });

  useEffect(() => {
    // Update the `root` element class and save to localStorage
    const root = document.getElementById('root');
    root.classList.remove("light", "dark"); // Remove any existing theme classes
    root.classList.add(theme); // Add the new theme class
    localStorage.setItem("mode", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;
