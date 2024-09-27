import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null) // cuando el token existe user pasa a ser un objeto y un objeto es un truthy => Boolean({}) = true
    const [token, setToken] = useState(null) // null es un falsy => Boolean(null) = false

    const signIn = async ({ username, password }) => {
        const res = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username, password
            }),
        });
        const data = await res.json();
        setToken(data.token)
    }

    const register = async ({ username, password }) => {
        const res = await fetch("http://localhost:3000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username, password
            }),
        });
        const data = await res.json();
        return { message: data.message, status: res.status }
    }

    const signOut = () => {
        setToken(null)
    }

    const getUserInfo = async () => {
        const res = await fetch("http://localhost:3000/profile", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        const data = await res.json();
        setUser(data)
    }

    useEffect(() => {
        if (token) {
            getUserInfo()
        } else {
            setUser(null)
        }
    }, [token])

    return (
        <UserContext.Provider value={{ user, signIn, signOut, register, token }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    return useContext(UserContext)
}

export default UserProvider