// ThemeProvider.js
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    primaryColor: '#2874A6',
    secondaryColor: '#8355C4',
    backgroundColor: 'white',
    textColor: 'black',
  });

  const toggleTheme = () => {
    // Toggle between light and dark themes or update as per your requirements
    setTheme((prevTheme) => ({
      ...prevTheme,
      backgroundColor: prevTheme.backgroundColor === 'white' ? 'black' : 'white',
      textColor: prevTheme.textColor === 'black' ? 'white' : 'black',
    }));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
