import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const signIn = () => {
        setUser(true)
    }

    return (
        <UserContext.Provider value={{ user, signIn }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    return useContext(UserContext)
}

export default UserProvider