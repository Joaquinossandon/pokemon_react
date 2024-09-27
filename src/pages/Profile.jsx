// import { useEffect } from "react"
import { Button } from "react-bootstrap"
import { useTheme } from "../context/ThemeContext"
import { useUser } from "../context/UserContext"
// import { useUser } from '../context/UserContext'
// import { useNavigate } from "react-router-dom"


function Profile() {
    const { theme } = useTheme()
    const { user, signOut } = useUser()

    return (
        <div className={theme === "dark" ? 'text-light' : 'text-dark'}
            style={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}
        >
            <h1>{user.username}</h1>
            <Button variant="danger" onClick={signOut}>Cerrar sesión</Button>
        </div>
    )
}

export default Profile