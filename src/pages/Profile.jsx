// import { useEffect } from "react"
import { useTheme } from "../context/ThemeContext"
// import { useUser } from '../context/UserContext'
// import { useNavigate } from "react-router-dom"


function Profile() {
    const { theme } = useTheme()
    // const { user } = useUser()
    // const navigate = useNavigate()

    // useEffect(() => {
    //     return () => {
    //         if (!user) {
    //             console.log("Me ejecuto!")
    //             navigate('/')
    //         }
    //     }
    // }, [user])

    return (
        <div className={theme === "dark" ? 'text-light' : 'text-dark'}
            style={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}
        >
            Profile
        </div>
    )
}

export default Profile