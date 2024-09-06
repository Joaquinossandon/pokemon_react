import { createContext, useContext, useState } from "react";

// 1.- Creamos el contexto
const ThemeContext = createContext();

// 2.- Creamos un proveedor de este contexto
const ThemeProvider = ({ children }) => {
    // 2.1.- Generamos el o los estados de mi contexto
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme === 'dark' ? 'light' : 'dark')
    }

    // 2.2 Creamos el componente que se encargará de proveer el contexto
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

// 3.- creando un custom hook que nos permitirá consumir el contexto
export const useTheme = () => {
    return useContext(ThemeContext)
}

export default ThemeProvider