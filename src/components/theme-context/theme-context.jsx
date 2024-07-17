import React, { useContext } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';

const ThemeContext = React.createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = useCallback(
        () =>
            setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark')),
        []
    );

    return (
        <ThemeContext.Provider value={{ value: theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
